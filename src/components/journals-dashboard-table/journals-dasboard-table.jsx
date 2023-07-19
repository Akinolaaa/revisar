import JournalsDashboardTableEntry from '../journals-dashboard-table-entry/journals-dashboard-table-entry';

const JournalsDashboardTable = () => {

  return (
    <div className="overflow-auto w-full">
      <div className='grid grid-cols-6 gap-2 content-center w-full text-xs text-[#7F5F5F] border-y py-2'>
        <span className="col-span-1"> Journal ID</span>
        <span className="col-span-2"> Article/Paper</span>
        <span className="col-span-1"> Status</span>
        <span className="col-span-1"> Date </span>
        <span className="col-span-1"></span>
      </div>

      <JournalsDashboardTableEntry />
      <JournalsDashboardTableEntry />
      <JournalsDashboardTableEntry />
      <JournalsDashboardTableEntry />
    
    </div>
  )
}

export default JournalsDashboardTable;