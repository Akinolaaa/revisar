import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditorJournalsDashboardTableEntry from '../editor-journals-dashboard-table-entry/journals-dashboard-table-entry';
import { selectCurrentUserToken, selectCurrentUser } from '../../../store/user/user.selector';
import { getAllArticles } from '../../../api/api';

const EditorJournalsDashboardTable = () => {
  const token = useSelector(selectCurrentUserToken);
  const user = useSelector(selectCurrentUser);
  // const journals = useSelector(selectArticles);
  const [ journals, setJournals ] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData(){
      const j = await getAllArticles(token);
      console.log(j);
      if(j){
        setJournals(j)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="overflow-auto w-full">
      <div className='grid grid-cols-6 gap-2 content-center w-full text-xs text-[#7F5F5F] border-y py-2'>
        <span className="col-span-1"> Journal ID</span>
        <span className="col-span-2"> Article/Paper</span>
        <span className="col-span-1"> Status</span>
        <span className="col-span-1"> Date </span>
        <span className="col-span-1"></span>
      </div>

      {
        journals && journals.map(journal => <EditorJournalsDashboardTableEntry key={journal._id} journal={journal} />)
      }
    
    </div>
  )
}

export default EditorJournalsDashboardTable;