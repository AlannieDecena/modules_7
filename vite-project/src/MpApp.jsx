import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MpApp.css'

import Meme from './miniProject/Meme'
import MpNavBar from './miniProject/MpNavBar'
import MpRoutes from './routes/MpRoutes'
import MemeCards from './miniProject/MemeCards'




function MpApp() {
 

    return (
      <div className="App">

          <MpNavBar/>
          <MpRoutes/>
          <Meme/>
          {/* <MemeCards/> */}
          
  
      </div>
    )
  }

  
  export default MpApp