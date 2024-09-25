import React from 'react'
import Headering from '../shared/Headering.jsx'
import ProductCard from'../Product/ProductCard.jsx'
//import Images

import Img1 from'../../assets/Headphone.png' 
import Img2 from'../../assets/Headphone.png' 
import Img3 from'../../assets/watch.png' 
import Img4 from'../../assets/speaker.png' 
import Img5 from'../../assets/gaming.png' 
const productsData=[
  {
    id:1,
    img:Img1,
    title:"Boat Headphone",
    price:"2000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img2,
    title:"Boat Headphone",
    price:"2000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img3,
    title:"Boat Headphone",
    price:"2000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img4,
    title:"Boat Headphone",
    price:"2000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img5,
    title:"Boat Headphone",
    price:"2000",
    aosDelay:"0",
  },
]
const Product = () => {
  return (
    <div>
        <div className='container dark:text-white'>
            {/*Header Section*/}
            <Headering title="Our Products" subtitle={"Explore our Products"}/>
            {/*Body Section*/}
            <ProductCard data={productsData}/>
        </div>
    </div>
  )
}

export default Product