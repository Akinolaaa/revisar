import { FiSearch } from 'react-icons/fi'
import Navigation from '../../components/navigation/navigation.component';
import JournalsLandingSection from '../../components/journals-landing-section/journal-landing-section.component';
//FiSearch
const Landing = () => {

  return (
    <div>
      <Navigation />

      <div className='flex flex-col justify-center items-center gap-3 text-center w-2/3 relative left-1/2 -translate-x-1/2 mt-20'>
        <h2 className='font-bold text-4xl w-full'> Welcome to Revisar</h2>
        <p className='text-sm text-[#7F5F5F]'>The ultimate peer review system. What are you looking to read today?</p>
        <div className='flex items-center justify-center rounded h-8 w-full'>
          <input className='pl-3 w-3/5 h-full rounded' placeholder='Search for a paper' />
          <FiSearch className="-translate-x-[150%] text-[#384A62]"/>
        </div>
      </div>

      <br />

      <JournalsLandingSection />
    </div>
  )
}

export default Landing;