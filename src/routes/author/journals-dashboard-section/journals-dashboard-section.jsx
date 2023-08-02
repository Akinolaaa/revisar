import JournalsDashboardTable from "../journals-dashboard-table/journals-dashboard-table";


const JournalsDashboardSection = () => {

  return(
    <div className="w-full">
      <div className="py-2 pl-5 bg-white border-0 rounded-lg">
        <div className="pb-2">
          <h1 className="text-lg font-semibold"> All Manuscripts</h1>
          <p className="text-[#7F5F5F] text-xs"> Manuscripts you submitted for review </p>
        </div>
        <JournalsDashboardTable />
      </div>

    </div>
  )
}

export default JournalsDashboardSection;