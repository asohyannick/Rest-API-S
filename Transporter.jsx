import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Pages/Error';
import SingleCocktail from './Pages/SingleCocktail';
// import components
import Navbar from './Components/Navbar';
const Transporter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cocktail/:id' element={<SingleCocktail/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
    </Router>
  )
}

export default Transporter