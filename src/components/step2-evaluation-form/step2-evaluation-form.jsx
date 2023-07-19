import Dropdown from "../dropdown/dropdown.component";
import FormInput from "../form-input/formInput.component";
import RadioInput from "../radioInput/radioInput.component";

const EvaluationForm = ( {toggle}) => {

  return (
    <div className="relative flex flex-col h-[85%] min-w-3/5 bg-white py-6 px-5 rounded overflow-auto ">
      <div className="absolute top-5 right-5 cursor-pointer" onClick={toggle}>
        <p>X</p>
      </div>
    
      <h1 className="font-semibold text-lg mb-5">Step 2: Evaluation Form</h1>

      <div className="flex flex-col gap-2">
        
        <RadioInput label={"Did you thoroughly review this paper"} options={["yes", "no"]}/>

        <RadioInput label={"Does the paper demonstrate an adequate understanding of the relevant literature in the field?"} options={["excellent", "good", "acceptable", "marginal", "poor" ]}/>

        <RadioInput label={"Are the methods and results presented clearly and appropriately?"} options={["excellent", "good", "acceptable", "marginal", "poor" ]}/>

        <RadioInput label={"Is the structure of the paper adequate? Is the paper well-organized with logical flow of argument?"} options={["excellent", "good", "acceptable", "marginal", "poor" ]}/>

        <Dropdown label={"Recommendation"} dropdownOptions={["accept", "reject"]} />
        
        <FormInput label={"Additional Comment"} textarea />
      </div>


      <div className="mt-4">
        <p className="text-xs text-[#7F5F5F] mb-4"> 
          Clicking “Next” means you have read and comply with the submission guidelines 
        </p>
        <button className="float-right text-white text-sm rounded px-2 py-1 bg-[#D3455B] text-center" >
          Submit
        </button>
      </div>
    </div>
  )
}



export default EvaluationForm;

     