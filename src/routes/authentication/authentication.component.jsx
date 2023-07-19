import Logo from "../../components/logo/logo.component";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";
import Pic from "../../assets/pic.png"
import { useState } from "react";

const Authentication = () => {
  const [isSignIn , setIsSignIn ] = useState(true);

  const switchAuth = () => setIsSignIn(!isSignIn);

  return (
    <div>
      <div className="mx-10 my-6 px-5 py-2 min-w-min">
        <Logo />
      </div>

      <div className="border-green-700 flex justify-around items-center gap-30 w-full px-10 max-h-[60%]">
        {
          isSignIn ? <SignIn authSwitch={switchAuth} /> : <SignUp authSwitch={switchAuth} />
        }
        <div> 
          <img className="h-[30rem]" alt='paint' src={Pic}/>
        </div>
      </div>
    </div>
  )
}

export default Authentication;