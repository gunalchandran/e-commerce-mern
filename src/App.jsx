import React from 'react'
import Navbar from './components/Navabar/Navbar.jsx'
import Hero from './components/Navabar/Hero/Hero.jsx'
import { Category } from './components/category/Category.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
    </div>
  )
}

export default App