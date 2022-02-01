import React from 'react'
import './App.css'
import { About } from './views/About'
import { Home } from './views/Home'
import { Portfolio } from './views/Portfolio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './views/Nav'


const App = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
      </>
    </Router>
   
  )
}


export default App;