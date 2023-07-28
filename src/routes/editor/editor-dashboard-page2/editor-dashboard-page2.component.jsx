import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectArticles } from "../../../store/articles/articles.selector";
import { BiSolidFilePdf } from "react-icons/bi";
import DashboardNav from "../../../components/navigation/dashboard-nav.component";
import EditorTakeAction from "../editor-take-action/editor-take-action.component";

const EditorDashboardPage2 = () => {
  const articles = useSelector(selectArticles);
  const { id } = useParams();
  const article = articles.find((article) => article._id === id);
  const { title, abstract, fileUrl, createdAt, keywords, userId } = article;

  return (
    <div className="mx-10 max-md:mx-0 px-10 max-md:px-2 py-2 min-w-min">
      <DashboardNav />
      <h1 className="text-lg font-semibold leading-10">{title}</h1>

      <div className="flex justify-start gap-5 w-5/6 leading-5 ">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7F5F5F] whitespace-nowrap">Author: <span className="text-black">{userId}</span></p>
          <p className="text-xs text-[#7F5F5F] whitespace-nowrap">Keywords: <span className="text-black">{keywords}</span></p>
          <p className="text-xs text-[#7F5F5F] whitespace-nowrap">Dates: <span className="text-black">{createdAt.split(":")[0].slice(0,10)}</span></p>
        </div>
        <div>
          <p className="text-xs text-[#7F5F5F]">Abstract: <span className="text-black">{abstract}</span></p>
        </div>
      </div>
    
      <br />

      <div className="col-span-2 flex gap-1 items-center text-black text-xs"> 
        <BiSolidFilePdf size={"1rem"} color='red' />
        <p>{title}</p>
        <a href={fileUrl} target="_blank" rel="noreferrer">
          <p className="text-[#D3455B] text-center text-xs  ">
            View
          </p>
        </a>
      </div>

      <br />
      <br />

      
      <EditorTakeAction article={article} />

    </div>
  )
}

export default EditorDashboardPage2;