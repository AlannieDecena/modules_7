import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import WindowResizer from './components/WindowResizer'
import Login from './components/Login'
import { ThemeProvider } from './context/ThemeContext'
import Clock from './components/Clock'
import Greeting from './components/Greeting'
import {EmojiProvider} from './context/EmojiContext'
import Emoji from './components/Emoji'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'




function App() {
 

  return (
    <div className="App">
      <ThemeProvider >
        <EmojiProvider>
        <UserProvider>
          <NavBar/>

            <AppRoutes/>

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
