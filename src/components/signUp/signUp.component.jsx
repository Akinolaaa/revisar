import FormInput from "../form-input/formInput.component";
import Dropdown from "../../components/dropdown/dropdown.component";

const SignUp = ({authSwitch}) => {

  return (
    <div className="p-7 bg-white rounded min-w-[22rem]">
      <h1 className="text-xl font-semibold mb-5 text-center"> Create an account</h1>
      <div className="flex justify-around cursor-pointer border-b border-[#D0BFBF] mb-4">
        <p className="text-sm px-1 py-2 border-b-2 border-[#D3455B]"> I am an Author</p>
        <p className="text-sm px-1 py-2 border-b-2 border-[#D3455B]"> I am a Reviewer</p>
      </div>
      <div className="flex flex-col gap-5 mb-5 pb-5">
        <Dropdown label="Title" dropdownOptions={["Miss", "Mr", "Mrs"]} />
        <FormInput label='Full Name' type='text' placeholder="e.g. Jane Doe"/>
        <FormInput label='Email' type='email' placeholder="name@example.com" />
        <FormInput label='Department' type='text' placeholder="" />
        <FormInput label='Faculty' type='text' />
        <FormInput label='Field of Research' type='text' />
      </div>
      <button className="text-white text-sm rounded px-2 py-1 bg-[#D3455B] w-full text-center" >
        Create
      </button>
      <p className="text-xs text-center text-[#7F5F5F] py-2">
        already have an account? <span className="text-[#D3455B] cursor-pointer" onClick={authSwitch}>Sign In</span>
      </p>
    </div>
  )
}

export default SignUp;