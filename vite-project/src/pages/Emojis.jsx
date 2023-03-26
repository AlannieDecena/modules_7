import Emoji from "../components/Emoji"
import { Outlet } from "react-router-dom"



function Emojis () {

    return (
       
    <div className="Counter componentBox">
        <p>emojis</p>
        <Outlet/>
    
    </div>
  
    )
}

export default Emojis