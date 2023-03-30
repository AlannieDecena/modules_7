import React from 'react';
import useFormInput from '../hooks/useFormInput';
import { ThemeContext, themes } from '../context/ThemeContext'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Login() {

    const themeContext = useContext(ThemeContext)
    const darkMode = themeContext.theme.background === themes.dark.background
    
    const usernameProps = useFormInput('')
    const passwordProps = useFormInput('')
    const {username, setUsername} = useContext(UserContext)

    const [loggedIn, setLoggedIn] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const [loginAttempts, setLoginAttempts] = React.useState(0)

    const handleLogin = (e) => {
        e.preventDefault();

        let username = usernameProps.value
        let password = passwordProps.value

        
        console.log(username + ' ' + password)

        //login successful/true if both values exist and match
        let isLoggedIn = (username && password && username === password)

        if (!isLoggedIn) { 
            let newAttempts = loginAttempts + 1

            if (newAttempts === 5) {
                setErrMsg('Maximum login attempts exceeded. You are blocked.'); 
            }
            else {
                setErrMsg('Unsuccessful login attempt #'+newAttempts+' of 5'); 
            }
            setLoginAttempts(newAttempts)
        }

        setLoggedIn( isLoggedIn )
    }
  

    return (
        <div className="Login componentBox" style={{backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground}}>

            <div>{loggedIn ? 'Hello ' + usernameProps.value : 'Please log in'}</div>

            {!loggedIn && loginAttempts < 5 &&

                <form onSubmit={handleLogin}>
                    <div className="formRow">
                        <label htmlFor="username">Username: </label>
                   
                        <input id="username" {...usernameProps}/>
                    </div>
                    <div className="formRow">
                        <label htmlFor="password"> Password: </label>
                            
                        <input type="password" id ="password" {...passwordProps} />
                    </div>

                    <button>Login</button>
                </form>
            }
            <p>{errMsg}</p>

           
        </div>
    );    
}

export default Login