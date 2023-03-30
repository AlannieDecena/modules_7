import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import WindowResizer from './components/WindowResizer'
import Login from './components/Login'
import { MyThemeProvider } from './context/ThemeContext'
import { ThemeProvider } from "@mui/material/styles";
import Clock from './components/Clock'
import Greeting from './components/Greeting'
import {EmojiProvider} from './context/EmojiContext'
import Emoji from './components/Emoji'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import  SimpleDialog  from './components/SimpleDialog'
import NavBarMui from './components/NavBarMui'
import { purpleTheme } from './themes/PurpleTheme'


function App() {
 

  return (
    <div className="App">
      <ThemeProvider theme={purpleTheme}>
      
        <EmojiProvider>
        <UserProvider>
          {/* <NavBar/> */}
          <NavBarMui/> 
            <AppRoutes/> 
          <SimpleDialog/> 
            {/* <Counter />
            <WindowResizer />
            <Login />
            <Clock/>
            <Emoji/>
            <Greeting/> */}
            <Footer/> 
          </UserProvider>
        </EmojiProvider>

      </ThemeProvider > 

 

    </div>
  )
}

export default App
