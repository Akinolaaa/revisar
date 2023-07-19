import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = ({label, dropdownOptions, ...others}) => {
  const [ showOptions, setShowOptions ] = useState(false);
  const [ selectedOption, setSelectedOption ] = useState(null);
  const DEFAULT = "--please select an option--";

  const toogleDisplay = () => setShowOptions(!showOptions)

  const chooseOption = (event) => {
    if(!event.target.innerText) {
      setSelectedOption(null);
      toogleDisplay();
      return;
    }
    setSelectedOption(event.target.innerText);
    toogleDisplay();
  }

  return (
    <div className="w-full">
      <label className="text-[#7F5F5F] text-xs">{label}</label>

      <div className="relative w-full cursor-pointer">
        <div className={`flex justify-between items-center overflow-hidden text-sm border rounded border-[#D0BFBF] active:ring-black active:ring-inset px-2 py-1 ${showOptions && "border-2 border-black"}`} onClick={toogleDisplay}>
          <p className="text-ellipsis overflow-hidden">{ selectedOption ? selectedOption : DEFAULT }</p> 
          <BiChevronDown className={`transition duration-500 ${showOptions && "rotate-180"}`} 
            size={"1.5em"} />
        </div>
        {
          showOptions &&
          <div className="absolute w-full z-10 pt-2 px-1 bg-slate-200 border-r border-l text-xs"> 
            <p className="pb-2 border-b text-gray-600" onClick={ chooseOption }>{DEFAULT}</p>
            {
              dropdownOptions && dropdownOptions.map(option => <p key={option} className="pb-2 border-b" onClick={ chooseOption }>{option}</p>)
            }
          </div>
        }
      </div>
    
    </div>
  
  )
}

export default Dropdown;