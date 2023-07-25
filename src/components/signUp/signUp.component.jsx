import { useState } from "react";
import FormInput from "../form-input/formInput.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import { signUpUser } from "../../api/api";

const defaultFields = {
  title: "Mr",
  name: "",
  email: "",
  password: "",
  department:"",
  faculty:"",
  fieldOfResearch:"",
  role: "author"
};
const SignUp = ({authSwitch}) => {
  const [ signUpFields, setSignUpFields ] = useState(defaultFields);

  const resetSignUpFields = () => setSignUpFields(defaultFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpFields({...signUpFields, [name]: value})
    // console.log(signUpFields);
  }

  const handleSelect = (selected) => {
    setSignUpFields({...signUpFields, ...selected })
    //console.log(signUpFields);
  }

  const setRoleAuthor = () => {
    setSignUpFields({...signUpFields, role: "author"})
  }

  const setRoleReviewer = () => {
    setSignUpFields({...signUpFields, role: "reviewer"})
  }


  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const user = await signUpUser(signUpFields);
      alert(`${user.name} you have successfully created an account. Sign in with your credentials`)
      resetSignUpFields();
    }catch(err) {
      console.log("error occured trying to sign up", err)
    }
  }

  return (
    <div className="p-7 bg-white rounded min-w-[22rem] max-w-min">
      <h1 className="text-xl font-semibold mb-5 text-center"> Create an account</h1>
      <div className="flex justify-around cursor-pointer border-b border-[#D0BFBF] mb-4">
        <p className={`text-sm px-1 py-2 border-[#D3455B] ${signUpFields.role === "author" && "border-b-2"}`} onClick={setRoleAuthor}> I am an Author</p>
        <p className={`text-sm px-1 py-2 border-[#D3455B] ${signUpFields.role === "reviewer" && "border-b-2"}`} onClick={setRoleReviewer}> I am a Reviewer</p>
      </div>

      <form onSubmit={ handleSubmit }>
        <div className="flex flex-col gap-5 mb-5 pb-5">
          <div className="grid grid-cols-3 gap-1">
            <Dropdown label="Title" name="title" dropdownOptions={["Miss", "Mr", "Mrs", "Dr", "Prof"]} onSelect={handleSelect} />
            <div className="col-span-2">
              <FormInput label='Full Name' name="name" type='text' placeholder="e.g. Jane Doe" onChange={handleChange}/>
            </div>
          </div>
          <FormInput label='Email' name="email" type='email' placeholder="name@example.com" onChange={handleChange} required />
          <FormInput label='Password' name="password" type='password' onChange={handleChange} required />
          <FormInput label='Department' name="department" type='text' onChange={handleChange} required />
          <FormInput label='Faculty' name="faculty" type='text' onChange={handleChange} required />
          <FormInput label='Field of Research' name="fieldOfResearch" type='text' onChange={handleChange} required />
        </div>
        <button className="text-white text-sm rounded px-2 py-1 bg-[#D3455B] w-full text-center" >
          Create Account
        </button>
      </form>
      
      <p className="text-xs text-center text-[#7F5F5F] py-2">
        already have an account? <span className="text-[#D3455B] cursor-pointer" onClick={authSwitch}>Sign In</span>
      </p>
    </div>
  )
}

export default SignUp;