import { BiSolidFilePdf } from 'react-icons/bi'

const JournalsDashboardTableEntry = () => {

  return (

    <div className='grid grid-cols-6 gap-2 items-center w-full text-xs text-[#7F5F5F] py-1'>
      <span className='col-span-1 text-black'> 23456789 </span>
      <div className="col-span-2 flex gap-1 items-center text-black"> 
        <BiSolidFilePdf size={"1.2rem"} color='red' />
        <p>Image Caption Generation using CNN</p>
      </div>
      <span className="col-span-1"> Submitted </span>
      <span className="col-span-1"> 12/10/2023</span>
      <button className="text-[#D3455B] text-xs border border-[#D3455B] rounded w-4/6 px-2 py-1 ">
        View
      </button>
    </div>
  )
}

export default JournalsDashboardTableEntry;