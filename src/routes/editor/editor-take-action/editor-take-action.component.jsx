
const EditorTakeAction = () => {

  return(
    <div className="py-4 pl-5 bg-white border-0 rounded-lg">
      <h1 className="text-lg font-semibold mb-5"> Take an action on this paper </h1>
      <div className="flex items-center gap-8 text-xs">
        <p className="text-[#7F5F5F] text-xs"> Does this paper meet revisar standards? </p>
        <div className="flex gap-4 items-center ">
          <div className="flex items-center">
            <input className="checked:bg-[#D3455B]" type="checkbox" name="yes" id="yes" />
            <label for="yes" className="ml-1">Yes</label>
          </div>
          <div className="flex items-center">
            <input className="checked:bg-[#D3455B]" type="checkbox" name="no" id="no" />
            <label for="no" className="ml-1">No</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorTakeAction;