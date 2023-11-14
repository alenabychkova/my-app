// import { Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import Navbar from './Components/NavBar/NavBar'
import ArivalMobile from './Project/Pages/ArivalMobile'
import ArivalWeb from './Project/Pages/ArivalWeb'
import VTB from './Project/Pages/VTB'
import { HomePage } from './Project/Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import './Project/Styles/Colors.css'
import './Project/Styles/Spacing.css'
import './Project/Styles/Typography.css'
import './Project/Styles/Radius.css'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/arival-web" element={<ArivalWeb />} />
        <Route path="/arival-mobile" element={<ArivalMobile />} />
        <Route path="/vtb-bank" element={<VTB />} />
      </Routes>
    </div>
  )
}

export default App
