

export default function Status({status}) {
  let color;
  switch(status){
    case "accepted":
      color= "bg-green-400";
      break;
    case "in-review":
      color= "bg-yellow-300";
      break;
    case "assigned":
      color= "bg-blue-400 ";
      break;
    case "rejected":
      color= "bg-red-400";
      break;
    default:
      color= "bg-slate-400";
      break;
  } 

  return (
    <p className={`${color} px-2 py-1 leading-4 text-white text-xs max-w-min rounded-full`}>{status}</p>
  )
}