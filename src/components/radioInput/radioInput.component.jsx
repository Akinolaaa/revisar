import { useId } from "react";


const RadioInput = ({ label, options }) => {
  const inputId = useId();

  return (
    <div className="w-full text-xs">
      <p className="text-[#7F5F5F] text-xs">{label}</p>
      <div className="flex gap-2">
        {
          options.map(option => {
            return(
              <div key={option+inputId} className="flex items-center mt-1">
                <input type="radio" name={label} value={option} id={inputId} />
                <label className="capitalize ml-1" htmlFor={inputId}>{option}</label>
              </div>
            )
          })
        }
      </div>
    </div>
  
  )
}

export default RadioInput;