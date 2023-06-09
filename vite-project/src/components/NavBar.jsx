import {NavLink, Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/post">Post</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                {/* <li><NavLink to="/students">Students</NavLink></li> */}
            </ul>
        </div>
    )
}

export default NavBar