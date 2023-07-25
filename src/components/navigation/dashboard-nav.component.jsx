
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Logo from "../logo/logo.component";
import { FaBell } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import displayPic from "../../assets/display-pic.svg";

const DashboardNav = () => {
  const { name, role } = useSelector(selectCurrentUser);
  return(
    <div className="flex justify-between items-center my-4 mb-10">
      <Logo />
      <div className="flex items-center gap-6">
        <div className="border-r border-[#D0BFBF] py-2 pr-5">
          <div className="p-2 border border-[#D0BFBF] rounded-md">
            <FaBell />
          </div>
        </div>

        <div className="flex items-center gap-2 justify-between">
          <img className="h-8 rounded-full" alt="dp" src={displayPic}/>
          <div>
            <h1 className="text-sm capitalize"> {name} </h1>
            <p className="text-xs text-[#D0BFBF] capitalize"> {role} </p>
          </div>
          <BiChevronDown size={"1.2em"}/>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav;