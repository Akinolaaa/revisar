import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/formInput.component";

const SignIn = ({ authSwitch }) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dash')
  }

  return (
    <div className="p-7 bg-white rounded min-w-[22rem]">
      <h1 className="text-xl font-semibold mb-5 text-center"> Welcome back!</h1>
      <div className="flex justify-around cursor-pointer border-b border-[#D0BFBF] mb-4">
        <p className="text-sm px-1 py-2 border-b-2 border-[#D3455B]"> I am an Author</p>
        <p className="text-sm px-1 py-2 border-b-2 border-[#D3455B]"> I am a Reviewer</p>
      </div>
      <div className="flex flex-col gap-5 mb-5 pb-5">
        <FormInput label='Email' type='email' placeholder="name@example.com" />
        <FormInput label='Password' type='password' placeholder="" />
      </div>
      <button className="text-white text-sm rounded px-2 py-1 bg-[#D3455B] w-full text-center" onClick={handleSignIn} >
        Sign In
      </button>
      <p className="text-xs text-center text-[#7F5F5F] py-2">
        New User? <span className="text-[#D3455B] cursor-pointer" onClick={authSwitch}>Create an account</span>
      </p>
    </div>
  )
}

export default SignIn;