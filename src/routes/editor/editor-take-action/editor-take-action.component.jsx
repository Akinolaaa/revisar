import { useState } from "react";

const EditorTakeAction = () => {
  const [ action, setAction ] = useState("");

  const handleChange = (event) => {
    setAction(event.target.id);
  }

  return(
    <div className="py-4 px-5 bg-white border-0 rounded-lg">
      <h1 className="text-lg font-semibold mb-5"> Take an action on this paper </h1>
      <div className="flex items-center gap-8 text-xs">
        <p className="text-[#7F5F5F] text-xs"> Does this paper meet revisar standards? </p>
        <div className="flex gap-4 items-center ">
          <div className="flex items-center">
            <input className="checked:bg-[#D3455B]" type="radio" name="action" id="yes" onChange={handleChange}/>
            <label htmlFor="yes" className="ml-1">Yes</label>
          </div>
          <div className="flex items-center">
            <input className="checked:bg-[#D3455B]" type="radio" name="action" id="no" onChange={handleChange} />
            <label htmlFor="no" className="ml-1">No</label>
          </div>
        </div>
      </div>

      <div className="my-5">
        {
          action === "yes" && 
          <div>
            <p className="text-[#7F5F5F] text-sm"> Assign to a reviewer</p>
          </div>
        }
      </div>
      <div className="my-5">
        {
          action === "no" && 
          <div className="flex justify-end" >
            <button className="text-white text-sm text-center rounded px-4 py-1 my-1 bg-[#D3455B]" >
              Decline Paper
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default EditorTakeAction;