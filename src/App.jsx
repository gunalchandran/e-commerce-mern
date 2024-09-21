import React from 'react'
import Navbar from './components/Navabar/Navbar.jsx'
import Hero from './components/Navabar/Hero/Hero.jsx'
import { Category } from './components/category/Category.jsx'
import { Category2 } from './components/category/Category2.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
    </div>
  )
}

export default App