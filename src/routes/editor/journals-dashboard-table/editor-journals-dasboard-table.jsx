import { useSelector } from 'react-redux';
import EditorJournalsDashboardTableEntry from '../journals-dashboard-table-entry/journals-dashboard-table-entry';
import {selectArticles } from '../../../store/articles/articles.selector';

const EditorJournalsDashboardTable = () => {
  const journals = useSelector(selectArticles);

  return (
    <div className='overflow-auto'>
      <div className="w-full whitespace-nowrap min-w-[30rem]">
        <div className='grid grid-cols-6 gap-2 content-center w-full text-xs text-[#7F5F5F] border-y py-2'>
          <p className="col-span-1 mr-2"> Journal ID</p>
          <p className="col-span-2 mr-2"> Article/Paper</p>
          <p className="col-span-1 mr-2"> Status</p>
          <p className="col-span-1 mr-2"> Date </p>
          <p className="col-span-1 px-2"></p>
        </div>

        {
          journals && journals.map(journal => <EditorJournalsDashboardTableEntry key={journal._id} journal={journal} />)
        }
      </div>
    </div>
      
  )
}

export default EditorJournalsDashboardTable;