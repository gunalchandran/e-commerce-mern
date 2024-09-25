import React from 'react'
import Navbar from './components/Navabar/Navbar.jsx'
import Hero from './components/Navabar/Hero/Hero.jsx'
import { Category } from './components/category/Category.jsx'
import { Category2 } from './components/category/Category2.jsx'
import Services from './components/services/Services.jsx'
import Banner from './components/Banner/Banner.jsx'
import Product from './components/Product/Product.jsx'
const App = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner/>
      <Product/>
    </div>
  )
}

export default App