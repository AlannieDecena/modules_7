import { Routes, Route } from "react-router-dom"
import App from "../App"
import Meme from "../miniProject/Meme"
import PageNotFound from "../pages/PageNotFound"
import About from "../pages/About"
import MpAbout from "../miniProject/MpAbout"
import AddMeme from "../miniProject/AddMeme"




function MpRoutes(props) {

    return (

        
        <Routes>
           
            <Route path='/' element={<Meme {...props} />} />


            <Route path='/about' element={<MpAbout {...props} />} />
            <Route path='/add' element={<AddMeme {...props} />} />

           
        </Routes>
    )
}


export default MpRoutes