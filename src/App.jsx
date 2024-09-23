import React from 'react'
import Navbar from './components/Navabar/Navbar.jsx'
import Hero from './components/Navabar/Hero/Hero.jsx'
import { Category } from './components/category/Category.jsx'
import { Category2 } from './components/category/Category2.jsx'
import Services from './components/services/Services.jsx'
const App = () => {
  return (
    <div className='bg-white dark:bg-white'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
    </div>
  )
}

export default App