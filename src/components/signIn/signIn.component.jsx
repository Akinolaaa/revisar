import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/formInput.component";
import { loginUser } from "../../api/api";
import { setCurrentUser } from '../../store/user/user.slice';

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = ({ authSwitch }) => {
  const dispatch = useDispatch();
  const [ signInFields, setSignInFields ] = useState(defaultFields);
  const { email, password } = signInFields;


  const navigate = useNavigate();

  const resetSignInFields = () => setSignInFields(defaultFields);

  const handleChange = (event) =>{
    const { name, value } = event.target;
    setSignInFields({...signInFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const  user  = await loginUser(email,password);
      dispatch(setCurrentUser(user));
      resetSignInFields();
      switch(user.user.role){
        case "reviewer":
          navigate('/reviewer');
          break;
        case "editor":
          navigate('/editor');
          break;
        default: 
          navigate('/dash');
          break;
      }

    } catch (err) {
      console.log("error occured during sign in", err);
    }
  }

  return (
    <div className="p-7 bg-white rounded min-w-[22rem]">
      <h1 className="text-xl font-semibold mb-5 text-center"> Welcome back!</h1>
      <div className="flex justify-around cursor-pointer border-b border-[#D0BFBF] mb-4">
        <p className="text-sm px-1 py-2 border-b-2 border-[#D3455B]"> I am an Author</p>
        <p className="text-sm px-1 py-2 border-b-2 border-[#D3455B]"> I am a Reviewer</p>
      </div>
      <form onSubmit={ handleSubmit }>
        <div className="flex flex-col gap-5 mb-5 pb-5">
          <FormInput label='Email' name="email" type='email' placeholder="name@example.com" value={email} onChange={handleChange} required />
          <FormInput label='Password' name="password" type='password' value={password} onChange={handleChange} required/>
        </div>
        <button className="text-white text-sm rounded px-2 py-1 bg-[#D3455B] w-full text-center" >
          Sign In
        </button>
      </form>
      <p className="text-xs text-center text-[#7F5F5F] py-2">
        New User? <span className="text-[#D3455B] cursor-pointer" onClick={authSwitch}>Create an account</span>
      </p>
    </div>
  )
}

export default SignIn;