import { Routes, Route } from "react-router-dom"
import App from "../App"
import Emoji from "../components/Emoji"
import Login from "../components/Login"
import About from "../pages/About"
import Home from "../pages/Home"
import Post from "../components/Post"
import Dashboard, {DashboardMessages, DashboardTasks} from "../pages/Dashboard"
import PageNotFound from "../pages/PageNotFound"

//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}
function AppRoutes(props) {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route path='/' element={<Home {...props} />} />

            {/* <Route exact path='/' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route> */}

            <Route path='/about' element={<About {...props} />} />

            <Route path='/login' element={<Login {...props} />} />

            <Route path='/post' element={<Post {...props} />} />

            <Route exact path='/dashboard' element={<Dashboard {...props} />} >
                <Route path=":messages" element={<DashboardMessages />} />
                <Route path=":tasks" element={<DashboardTasks />} />
            </Route>

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />            
        </Routes>
    )
}

//split up the components we have created so far and make different pages for them

export default AppRoutes