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
import Emojis from './components/Emojis'

function App() {
 

  return (
    <div className="App">
      <ThemeProvider >

      <Counter />
      <WindowResizer />
      <Login />
      <Clock/>
      <Greeting/>
      <Emojis />


      </ThemeProvider >

    </div>
  )
}

export default App
