

const RadioInput = ({ label, options }) => {


  return (
    <div className="w-full text-xs">
      <p className="text-[#7F5F5F] text-xs">{label}</p>
      <div className="flex gap-2">
        {
          options.map(option => {
            return(
              <div key={label} className="flex items-center mt-1">
                <input type="radio" name={label} id={label+option} value={option} />
                <label className="capitalize ml-1" for={label+option}>{option}</label>
              </div>
            )
          })
        }
      </div>
    </div>
  
  )
}

export default RadioInput;