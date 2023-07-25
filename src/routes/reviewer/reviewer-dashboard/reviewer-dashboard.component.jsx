import DashboardNav from "../../../components/navigation/dashboard-nav.component";
import JournalsDashboardSection from "../../../components/journals-dashboard-section/journals-dashboard-section";
import ReviewerSubmissionPopup from "../../../components/reviewer-submission-popup copy/reviewer-submission-popup";
import displayPic from "../../../assets/display-pic.svg";
import { useState } from "react";


const ReviewerDashboard = () => {
  const [ showPopup, setShowPopup ] = useState(false);
  
  const togglePopUp = () => setShowPopup(!showPopup)

  return (
    <div>
      { showPopup && <ReviewerSubmissionPopup className="hidden" toogle={ togglePopUp }/> }
      <div className="mx-10 max-md:mx-0 px-10 max-md:px-2 py-2 min-w-min">
        <DashboardNav />
        <div className="w-1/3 max-md:w-5/6">
          <h1 className="text-2xl font-semibold leading-10"><span className="whitespace-nowrap">Welcome back, </span> Reviewer </h1>
          <p className="text-xs text-[#7F5F5F]">
            Welcome to your dashboard. Create, manage, and share your manuscripts for review from your peers
          </p>
        </div>

        <br />

        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-2 items-center whitespace-nowrap">
            <img className="h-14 rounded-full" alt="dp" src={displayPic}/>
            <div>
              <h2 className="capitalize"> Eirene Oyakhilome </h2>
              <p className="text-xs text-[#7F5F5F]">
                <span className="pr-1"> Computer Science </span> <span className="pl-1 border-l border-[#D0BFBF] "> Science </span>
              </p>
            </div>
          </div>

          <div className="flex p-1 border border-[#D0BFBF] rounded-full text-[#7F5F5F] text-xs whitespace-nowrap">
            <div className="px-3 border-r border-[#D0BFBF] ">
              <h2 >Pending Reviews</h2>
              <p className="text-center text-black"> 3 </p>
            </div>
            <div className="px-3">
              <h2>Reviewed Papers</h2>
              <p className="text-center text-black"> 1 </p>
            </div>
          </div>
          <button className="text-white text-sm text-center rounded px-4 py-1 my-1 bg-[#D3455B]" onClick={ togglePopUp } >
            + Submit New Manuscript
          </button>
        </div>
    

        <br />

        <div className="flex gap-4 cursor-pointer border-b border-[#D0BFBF] mb-4 text-[#7F5F5F] text-xs">
          <p className="px-1 py-2 border-b-2 border-[#D3455B]"> Pending Reviews </p>
          <p className="px-1 py-2 border-b-2 border-[#D3455B]"> Reviewed Papers </p>
        </div>
        <JournalsDashboardSection />

      </div>
    </div>
  )
}

export default ReviewerDashboard;