import { useState } from 'react';
import { useSelector } from 'react-redux';
import {selectCurrentUserToken} from '../../store/user/user.selector';
import Dropdown from "../dropdown/dropdown.component";
import FormInput from "../form-input/formInput.component";
import {submitArticle} from "../../api/api.js";

const defaultFields = {
  typeOfReview: "",
  title:"",
  abstract: "",
  fieldOfResearch: "default",
  keywords: "",
  file: null,
}

const ManuscriptDetails = ( {toggle}) => {
  const userToken = useSelector(selectCurrentUserToken);


  const [ manuscriptSubmissionFields, setManuscriptSubmissionFields ] = useState(defaultFields);
  
  const handleSelect = (selected) => {
    setManuscriptSubmissionFields({...manuscriptSubmissionFields, ...selected});
  }

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    console.log(type);
    const newValue = type ==='file' ? files[0] : value;
    setManuscriptSubmissionFields({...manuscriptSubmissionFields, [name]: newValue});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(manuscriptSubmissionFields)

    // const formData = new FormData();
    // for ( let key in Object.keys(defaultFields) ){
    //   formData.append(key, manuscriptSubmissionFields[key]);
    // }
    try {
      const res = await submitArticle(manuscriptSubmissionFields, userToken);
      if(res){
        console.log(res);
        alert("submited successfully")
        toggle();
      }
    } catch (error) {
      console.log("error occured submitting manuscript");
    }
  }

  return (
    <div className="relative flex flex-col h-[83%] bg-white py-6 px-5 rounded overflow-auto ">
      <div className="absolute top-5 right-5 cursor-pointer" onClick={toggle}>
        <p>X</p>
      </div>
      <div className="mb-5">
        <h1 className="font-semibold text-lg">Step 2: Manuscript Details</h1>
        <p className="text-xs text-[#7F5F5F]"> Kindly go through the guidelines</p>
      </div>

      <form onSubmit= { handleSubmit }>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Dropdown label={"What kind of review would you like?"} name="typeOfReview" dropdownOptions={["option 1", "option 2"]} onSelect={handleSelect} />
            <Dropdown label={"Select a journal"} name="journal" dropdownOptions={["option 1", "option 2"]} onSelect={handleSelect} />
          </div>
          <FormInput label={"Title"} name="title" type="text" onChange={handleChange}/>
          <FormInput textarea label={"Abstract"} name="abstract" type="text" rows={3} onChange={handleChange}/>
          <FormInput textarea label={"Keywords"} name="keywords" type="text" rows={3} onChange={handleChange} />
          <FormInput label={"Upload Manuscript"} name="file" type="file" onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-xs text-[#7F5F5F] mb-4"> 
            Clicking “Next” means you have read and comply with the submission guidelines 
          </p>
          <button className="float-right text-white text-sm rounded px-2 py-1 bg-[#D3455B] text-center" >
            Submit
          </button>
        </div>
      </form>

    </div>
  )
}

export default ManuscriptDetails;