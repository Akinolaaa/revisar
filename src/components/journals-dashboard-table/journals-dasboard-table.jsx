import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import JournalsDashboardTableEntry from '../journals-dashboard-table-entry/journals-dashboard-table-entry';
import { getAllArticles } from '../../api/api';
import { selectCurrentUserToken } from '../../store/user/user.selector';

const JournalsDashboardTable = () => {
  const [ journals, setJournals ] = useState([]);
  const token = useSelector(selectCurrentUserToken);

  useEffect(() => {
    async function fetchData(){
      const j = await getAllArticles("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNmRhNzViNzAyMTZhYjgxY2VkNjciLCJuYW1lIjoiRWlyZW5lIE95YWtoaWxvbWUiLCJyb2xlIjoiZWRpdG9yIiwiaWF0IjoxNjkwMTM2MDkzLCJleHAiOjE2OTI3MjgwOTN9.6oBtN7QypfvARzeFUzKvneOy04yxSM8BPxZbR9NUTcQ");
      console.log(j);
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

      <JournalsDashboardTableEntry />
      <JournalsDashboardTableEntry />
      <JournalsDashboardTableEntry />
      <JournalsDashboardTableEntry />
    
    </div>
  )
}

export default JournalsDashboardTable;