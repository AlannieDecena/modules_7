import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiscNavBar from './BaiscMedia/BasicNavBar'
import BasicPost from './BaiscMedia/BasicPost'
import MakePost from './BaiscMedia/MakePost'

function NewApp() {
 

    return (
      <div className="App">
  
          <BaiscNavBar/>
          <MakePost/>
          <BasicPost/>
  
      </div>
    )
  }
  
  export default NewApp
  