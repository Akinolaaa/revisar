import { useState } from "react";
import SubmissionGuidlines from "../step1-submission-guidelines/step1-submission-guidelines";
// import ManuscriptDetails from "../step2-manuscript-details/step2-manuscript-details";
import EvaluationForm from "../step2-evaluation-form/step2-evaluation-form";

const SubmissionPopup = ({ toggle }) => {
  const [ isStep1, setIsStep ] = useState(true);

  const changeStep = () => setIsStep(!isStep1)

  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center bg-gray-950/50">
      
      {
        isStep1  ?
        <SubmissionGuidlines toggle={toggle} changeStep={changeStep} />
        :
        <EvaluationForm toggle={toggle} />
      }
    </div>

  )
}

export default SubmissionPopup;