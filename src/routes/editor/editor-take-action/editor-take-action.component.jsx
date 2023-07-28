import { useState, useEffect } from "react";
import { declineAnArticle, getReviewersByField } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUserToken } from "../../../store/user/user.selector";
import { assignReviewers } from "../../../api/api";

const EditorTakeAction = ({article}) => {
  const [ action, setAction ] = useState("");
  const [ reviewers, setReviewers ] = useState([]);
  const [ selectedReviewers, setSelectedReviewers ] = useState([]);
  const { _id:articleId, fieldOfResearch } = article;
  const navigate = useNavigate();
  const userToken = useSelector(selectCurrentUserToken);


  useEffect(() => {
    async function fetchData(){
      const j = await getReviewersByField(fieldOfResearch, userToken);
      console.log(j);
      if(j){
        setReviewers(j);
      }
    }
    fetchData();
  },[fieldOfResearch, userToken])

  const handleChange = (event) => {
    setAction(event.target.id);
  }

  const handleSelectReviewer = (event) => {
    setSelectedReviewers([...selectedReviewers, event.target.value])
  }

  const handleAssignReviewers = async() => {
    try {
      const res = await assignReviewers(selectedReviewers, articleId, userToken);
      if(res) {
        alert("Reviewers assigned to paper successfully");
        navigate('/editor');
      }
    } catch (error) {
      console.error("error occured while trying to assign reviewers")
    }
  }

  const handleDecline = async() => {
    try {
      const res = await declineAnArticle(articleId, userToken);
      console.log(articleId, userToken)
      if(res) {
        alert("You just declined this article");
        navigate('/editor');
      }
    } catch (error) {
      console.error("Wahala wa")
    }
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
            {
              reviewers && reviewers.map(reviewer => 
                <div key={reviewer._id}>
                  <label className="text-xs">  
                    <input type="radio" value={reviewer._id} onSelect={handleSelectReviewer}/>
                    {reviewer.name}
                  </label>
              </div> || <p> No reviewers for this field of research at the moment</p>
              )
            }
            {
              reviewers &&
              <button className="text-white text-sm text-center rounded px-4 py-1 my-1 bg-[#D3455B]" onClick={handleAssignReviewers} >
                Assign Reviewer
              </button>
            }
          </div>
        }
      </div>
      <div className="my-5">
        {
          action === "no" && 
          <div className="flex justify-end" >
            <button className="text-white text-sm text-center rounded px-4 py-1 my-1 bg-[#D3455B]" onClick={handleDecline} >
              Decline Paper
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default EditorTakeAction;