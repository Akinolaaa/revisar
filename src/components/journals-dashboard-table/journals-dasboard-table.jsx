import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JournalsDashboardTableEntry from '../journals-dashboard-table-entry/journals-dashboard-table-entry';
import { getArticlesByUserId } from '../../api/api';
import { selectCurrentUserToken, selectCurrentUser } from '../../store/user/user.selector';
import { selectArticles } from '../../store/articles/articles.selector';
import { setArticles } from '../../store/articles/articles.slice';

const JournalsDashboardTable = () => {
  const token = useSelector(selectCurrentUserToken);
  const user = useSelector(selectCurrentUser);
  // const journals = useSelector(selectArticles);
  const [ journals, setJournals ] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData(){
      const j = await getArticlesByUserId(user.id, token);
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
        journals && journals.map(journal => <JournalsDashboardTableEntry key={journal._id} journal={journal} />)
      }
    
    </div>
  )
}

export default JournalsDashboardTable;