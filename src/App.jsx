import React from 'react'
import "./index.css"
import Btns from './components/Btns'
import Router from './components/Router'
import { BrowserRouter } from 'react-router-dom'
const App = () => {

  return (
    <BrowserRouter>
      {/* <Btns /> */}
      <Router />
    </BrowserRouter>
  )
}

export default App
