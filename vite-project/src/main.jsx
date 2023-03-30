import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BasicApp from './BasicApp'
import MpApp from './MpApp'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    {/* <BasicApp /> */}
    <MpApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
