import Dropdown from "../dropdown/dropdown.component";
import FormInput from "../form-input/formInput.component";

const ManuscriptDetails = ( {toggle}) => {

  return (
    <div className="relative flex flex-col h-[83%] bg-white py-6 px-5 rounded overflow-auto ">
      <div className="absolute top-5 right-5 cursor-pointer" onClick={toggle}>
        <p>X</p>
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg">Step 2: Manuscript Details</h1>
        <p className="text-xs text-[#7F5F5F]"> Kindly go through the guidelines</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Dropdown label={"What kind of review would you like?"} dropdownOptions={["option 1", "option 2"]} />
          <Dropdown label={"Select a journal"} dropdownOptions={["option 1", "option 2"]} />
        </div>
        <FormInput label={"Title"} type="text" />
        <FormInput textarea label={"Abstract"} type="text" rows={3}/>
        <FormInput textarea label={"Keywords"} type="text" rows={3} />
        <FormInput label={"Upload Manuscript"} type="file" />
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

export default ManuscriptDetails;