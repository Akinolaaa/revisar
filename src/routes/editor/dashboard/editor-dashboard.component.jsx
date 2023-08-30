import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectStatusCount } from "../../../store/articles/articles.selector";
import DashboardNav from "../../../components/navigation/dashboard-nav.component";
import JournalsDashboardSection from "../journals-dashboard-section/editor-journals-dashboard-section"
import SubmissionPopup from "../../../components/submission-popup/submission-popup";
import displayPic from "../../../assets/display-pic.svg";

const EditorDashboard = () => {
  const [ showPopup, setShowPopup ] = useState(false);
  const user = useSelector(selectCurrentUser);
  // const pending = useSelector(selectPendingArticlesCount);
  const pending = useSelector(selectStatusCount("pending"));
  const approved = useSelector(selectStatusCount("approved"));
  const tooglePopUp = () => setShowPopup(!showPopup)

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-full">
      { 
        showPopup && 
        <SubmissionPopup className="hidden" toogle={ tooglePopUp }/> 
      }
      <div className="max-md:mx-0 px-10 max-md:px-5 py-2 max-w-full">
        <DashboardNav />
        <div className="w-1/3 max-md:w-5/6">
          <h1 className="text-2xl font-semibold leading-10"><span className="whitespace-nowrap">Welcome back, </span> {user?.name.split(" ")[0]} </h1>
          <p className="text-xs text-[#7F5F5F]">
            Welcome to your dashboard. Create, manage, and share your manuscripts for review from your peers
          </p>
        </div>

        <br />

        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-2 items-center whitespace-nowrap">
            <img className="h-14 rounded-full" alt="dp" src={displayPic}/>
            <div>
              <h2 className="capitalize"> user?.name</h2>
              <p className="text-xs text-[#7F5F5F]">
                <span className="pr-1"> Computer Science </span> <span className="pl-1 border-l border-[#D0BFBF] "> Science </span>
              </p>
            </div>
          </div>
          <div className="flex p-1 border border-[#D0BFBF] rounded-full text-[#7F5F5F] text-xs whitespace-nowrap">
            <div className="px-3 border-r border-[#D0BFBF] ">
              <h2 >Pending Reviews</h2>
              <p className="text-center text-black"> {pending} </p>
            </div>
            <div className="px-3">
              <h2>Reviewed Papers</h2>
              <p className="text-center text-black"> {approved} </p>
            </div>
          </div>
        </div>

        <br />
        
        <div className="flex gap-4 cursor-pointer border-b border-[#D0BFBF] mb-4 text-[#7F5F5F] text-xs">
          <p className="px-1 py-2 border-b-2 border-[#D3455B]"> Manuscript </p>
          <p className="px-1 py-2 border-b-2 border-[#D3455B]"> Authors </p>
          <p className="px-1 py-2 border-b-2 border-[#D3455B]"> Reviewers </p>
        </div>

        <JournalsDashboardSection />

      </div>
    </div>
  )
}

export default EditorDashboard;