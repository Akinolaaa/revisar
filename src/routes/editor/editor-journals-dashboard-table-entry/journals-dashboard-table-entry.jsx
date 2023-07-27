import { useNavigate } from 'react-router-dom';
import { BiSolidFilePdf } from 'react-icons/bi'
import Status from '../../../components/status/status.component';

const EditorJournalsDashboardTableEntry = ({journal}) => {
  const { _id, title, status, createdAt } = journal;
  const navigate = useNavigate();
  
  const handleClick = async() => {
    navigate(`/editor/page2/${_id}`);
  }

  return (
    <div className='grid grid-cols-6 gap-2 items-center w-full text-xs text-[#7F5F5F] py-1'>
      <p className='col-span-1 text-black text-ellipsis overflow-hidden whitespace-nowrap'> {_id} </p>
      <div className="col-span-2 flex gap-1 items-center text-black"> 
        <BiSolidFilePdf size={"1.2rem"} color='red' />
        <p className='capitalize'>{title}</p>
      </div>
      <Status status={status} />
      <span className="col-span-1"> {createdAt.split(":")[0].slice(0,10)}</span>
      <p className="cursor-pointer text-[#D3455B] text-center text-xs border border-[#D3455B] rounded w-4/6 px-2 py-1 " onClick={handleClick}>
        Assess
      </p>
    </div>
  )
}

export default EditorJournalsDashboardTableEntry;