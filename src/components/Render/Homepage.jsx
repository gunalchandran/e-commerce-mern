import React from 'react'
import Navbar from '../../components/Navabar/Navbar.jsx'
import Hero from '../Navabar/Hero/Hero.jsx'
import { Category } from '../category/Category.jsx'
import { Category2 } from '../category/Category2.jsx'
import Services from '../services/Services.jsx'
import Banner from '../Banner/Banner.jsx'
import Product from '../Product/Product.jsx'
import Blog from '../Blogs/Blog.jsx'
export const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner/>
      <Product/>
      <Blog/>
    </div>
  )
}
export default Homepage;