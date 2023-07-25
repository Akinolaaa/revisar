import { useId } from "react";


const FormInput = ({label, textarea, ...others}) => {
  const inputId = useId();

  return (
    <div className="w-full">
      <label className="text-[#7F5F5F] text-xs" htmlFor={inputId}>{label}</label>
      {
        !textarea ?
        <input 
          className={`
            text-sm invalid:text-red-600 invalid:border-red-500 border rounded border-[#D0BFBF] w-full px-2 py-1
            file:rounded file:border-2 file:border-[#D3455B] file:text-xs file:bg-white file:text-[#D3455B] hover:file:bg-violet-100` 
          } id={inputId} {...others} 
        /> 
        :
        <textarea className="text-sm border rounded border-[#D0BFBF] w-full px-2 py-1" {...others}></textarea>
      }
    </div>
  
  )
}

export default FormInput;