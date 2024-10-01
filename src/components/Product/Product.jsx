import React from 'react'
import Headering from '../shared/Headering.jsx'
import ProductCard from'../Product/ProductCard.jsx'
import Img1 from '../../assets/Headphone1.jpg'
import Img2 from'../../assets/Headphone.png' 
import Img3 from'../../assets/watch.png' 
import Img4 from'../../assets/speaker.png' 
import Img5 from'../../assets/gaming.png' 
import Img6 from '../../assets/Airpodes.jpg'
import Img7 from '../../assets/Keyboard.jpeg'
import Img8 from '../../assets/dumstone.jpeg'
import Img9 from '../../assets/8inch.jpeg'
import Img10 from '../../assets/Apple_watch.jpeg'
const productsData=[
  {
    id:1,
    img:Img10,
    title:"Apple Watch",
    price:"₹ 20000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img9,
    title:"8-Inch-wallspeaker",
    price:"₹ 2500",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img3,
    title:"Times-Watch",
    price:" ₹ 2000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img4,
    title:"Speaker panton",
    price:" ₹ 2000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img5,
    title:"Vedio-Gaming ",
    price:" ₹ 7000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img7,
    title:"Boat Headphone",
    price:" ₹ 1000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img8,
    title:"Boat Headphone",
    price:" ₹ 10000",
    aosDelay:"0",
  },
  {
    id:1,
    img:Img6,
    title:"Boat Airpodes",
    price:" ₹ 1700",
    aosDelay:"0",
  },
  
]
const Product = () => {
  return (
    <div>
        <div className='container dark:text-white'>
            {/* Header Section
            <Headering title="Our Products" subtitle={"Explore our Products"}/>
            <ProductCard data={productsData}/>
            <h1>Hello</h1> */}

            <div>
              {productsData.map((data,index)=>(
                <div>
                  <img src={data.img} alt="" />
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Product