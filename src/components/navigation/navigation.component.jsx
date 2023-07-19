import { useNavigate } from "react-router-dom";
import Logo from "../logo/logo.component";

const Navigation = () => {
  const navigate = useNavigate();

  const toSignInPage = () => {
    navigate('/auth');
  }

  return(
      <div className="flex justify-between items-center rounded bg-white mx-10 my-6 px-5 py-2 min-w-min">
        <Logo />
        <div className="flex justify-center gap-5 cursor-pointer text-sm">
            <span>About</span>
            <span>Journals</span>
            <span>Conferences</span>
            <span>Manuscript</span>
        </div>
      
        <button className="text-white text-sm rounded px-2 py-1 bg-[#D3455B] text-center" onClick={toSignInPage} >
          Sign In
        </button>
      </div>
  )
}

export default Navigation;