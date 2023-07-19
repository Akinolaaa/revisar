import { BiSolidFilePdf } from "react-icons/bi";
import DashboardNav from "../../../components/navigation/dashboard-nav.component";
import EditorTakeAction from "../editor-take-action/editor-take-action.component";

const EditorDashboardPage2 = () => {
  

  return (
    <div className="mx-10 max-md:mx-0 px-10 max-md:px-2 py-2 min-w-min">
      <DashboardNav />
      <h1 className="text-lg font-semibold leading-10">Image Caption Generation using CNN </h1>

      <div className="flex justify-start gap-5 w-5/6 leading-5 ">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7F5F5F] whitespace-nowrap">Author: <span className="text-black">Eirene Oyakhilome </span></p>
          <p className="text-xs text-[#7F5F5F] whitespace-nowrap">Keywords: <span className="text-black">Lorem, ipsum, Vernacular, Adebola</span></p>
          <p className="text-xs text-[#7F5F5F] whitespace-nowrap">Dates: <span className="text-black">10/12/2023</span></p>
        </div>
        <div>
          <p className="text-xs text-[#7F5F5F]">Abstract: <span className="text-black">Lorem ipsum dolor sit amet consectetur. Aliquam lectus pulvinar et tellus in ullamcorper consequat varius. Sed imperdiet euismod mi dolor arcu donec volutpat. At non ipsum ullamcorper enim nisl risus sem posuere gravida. Quisque iaculis nibh viverra ornare. Molestie ante </span></p>
        </div>
      </div>
    
      <br />

      <div className="col-span-2 flex gap-1 items-center text-black text-xs"> 
        <BiSolidFilePdf size={"1rem"} color='red' />
        <p>Image Caption Generation using CNN</p>
      </div>

      <br />
      <br />

      
      <EditorTakeAction />

    </div>
  )
}

export default EditorDashboardPage2;