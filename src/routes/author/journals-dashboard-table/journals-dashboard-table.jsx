import { useSelector } from 'react-redux';
import JournalsDashboardTableEntry from '../journals-dashboard-table-entry/journals-dashboard-table-entry';
import { selectArticles } from '../../../store/articles/articles.selector';

const JournalsDashboardTable = () => {
  const journals = useSelector(selectArticles);

  return (
    <div className="overflow-auto">
      <div className="w-full whitespace-nowrap min-w-[30rem]">
        <div className='grid grid-cols-6 gap-2 content-center w-full text-xs text-[#7F5F5F] border-y py-2 min-w-[30rem]'>
          <span className="col-span-1 whitespace-nowrap"> Journal ID</span>
          <span className="col-span-2"> Article/Paper</span>
          <span className="col-span-1"> Status</span>
          <span className="col-span-1"> Date </span>
          <span className="col-span-1"></span>
        </div>

        {
          journals && journals.map(journal => <JournalsDashboardTableEntry key={journal._id} journal={journal} />)
        }
      
      </div>
    </div>
  )
}

export default JournalsDashboardTable;