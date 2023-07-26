import { BiSolidFilePdf } from 'react-icons/bi'

const JournalsDashboardTableEntry = ({journal}) => {
  const { _id, title, status, createdAt, fileUrl } = journal;
  
  const handleClick = () => {}

  return (
    <div className='grid grid-cols-6 gap-2 items-center w-full text-xs text-[#7F5F5F] py-1'>
      <p className='col-span-1 text-black text-ellipsis overflow-hidden whitespace-nowrap'> {_id} </p>
      <div className="col-span-2 flex gap-1 items-center text-black"> 
        <BiSolidFilePdf size={"1.2rem"} color='red' />
        <p className='capitalize'>{title}</p>
      </div>
      <span className="col-span-1"> {status} </span>
      <span className="col-span-1"> {createdAt.split(":")[0].slice(0,10)}</span>
      <a href={fileUrl} target="_blank" rel="noreferrer">
        <p className="text-[#D3455B] text-center text-xs border border-[#D3455B] rounded w-4/6 px-2 py-1 " onClick={handleClick}>
          View
        </p>
      </a>
    </div>
  )
}

export default JournalsDashboardTableEntry;