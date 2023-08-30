import { Outlet } from "react-router-dom"


const SharedLayout = () => {


  return(
    <div>
      <p> Let's try this shit out and see </p>
      <Outlet />
    </div>
  )
}

export default SharedLayout