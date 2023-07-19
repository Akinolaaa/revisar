

const SubmissionGuidlines = ({toggle, changeStep}) => {

  return (
    <div className="relative flex flex-col justify-between h-[83%] w-1/3 bg-white py-6 px-5 rounded ">
      <div className="absolute top-5 right-5 cursor-pointer" onClick={toggle}>
        <p>X</p>
      </div>
      <div>
        <div className="mb-5">
          <h1 className="font-semibold text-lg">Step 1: Submission Guidelines</h1>
          <p className="text-xs text-[#7F5F5F]"> Kindly go through the guidelines</p>
        </div>
        <div className="text-sm">
          <h1 className="py-3"> Submission Guidelines:</h1>
          <ol className="list-decimal list-inside leading-9">
            <li>Authors should provide a detailed abstract</li>
            <li>Authors should provide a detailed abstract</li>
            <li>Authors should provide a detailed abstract</li>
            <li>Authors should provide a detailed abstract</li>
          </ol>
        </div>
      </div>

      <div>
        <p className="text-xs text-[#7F5F5F] mb-4"> 
          Clicking “Next” means you have read and comply with the submission guidelines 
        </p>
        <button className="float-right text-white text-sm rounded px-2 py-1 bg-[#D3455B] text-center" onClick={changeStep} >
          Next
        </button>
      </div>
    </div>
  )
}

export default SubmissionGuidlines;