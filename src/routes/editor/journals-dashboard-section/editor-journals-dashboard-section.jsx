import EditorJournalsDashboardTable from "../journals-dashboard-table/editor-journals-dasboard-table";


const JournalsDashboardSection = () => {

  return(
    
      <div className="relative left-1/2 -translate-x-1/2 py-2 px-2 bg-white rounded-lg">
        <div className="pb-2">
          <h1 className="text-lg font-semibold"> All Manuscripts</h1>
          <p className="text-[#7F5F5F] text-xs"> Manuscripts submitted so far </p>
        </div>
        
        <EditorJournalsDashboardTable />
      </div>

    
  )
}

export default JournalsDashboardSection;