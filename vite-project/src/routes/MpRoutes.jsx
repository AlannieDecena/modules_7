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

            {/* special route to handle if none of the above match */}
            {/* <Route path="*" element={<PageNotFound />} />             */}
        </Routes>
    )
}

//split up the components we have created so far and make different pages for them

export default MpRoutes