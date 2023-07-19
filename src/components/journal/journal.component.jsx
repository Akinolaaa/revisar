
const Journal = ({journal}) => {
  const { department, submittedBy, date, img, id } = journal;

  return (
    <div className="text-[#7F5F5F] w-full max-w-[12rem]">
      <div className="flex items-center w-full gap-1">
        <p className="uppercase text-xs whitespace-nowrap">{department}</p>
        <div className="inline border-t border-b border-[#7F5F5F] w-full"></div>
      </div>
      <img alt={`journal${id}`} src={img} />
      <p className="text-xs whitespace-nowrap">{`Submitted by: ${submittedBy}`}</p>
      <p className="text-xs whitespace-nowrap">{`Date: ${date}`}</p>
    </div>
  )
}

export default Journal;