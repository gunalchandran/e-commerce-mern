import React from 'react'
import Headering from '../shared/Headering.jsx'
import ProductCard from'../Product/ProductCard.jsx'
import Img1 from '../../assets/Headphone1.jpg'
import Img2 from'../../assets/Headphone.png' 
import Img3 from'../../assets/watch.png' 
import Img4 from'../../assets/speaker.png' 
import Img5 from'../../assets/Headphone3.jpeg' 

const productsData=[

  {

    img:Img1,
    title:"8-Inch-wallspeaker",
    price:"₹ 2500",
    aosDelay:"0",
  },
  {

    img:Img2,
    title:"Times-Watch",
    price:" ₹ 2000",
    aosDelay:"0",
  },
  {
  
    img:Img3,
    title:"Speaker panton",
    price:" ₹ 2000",
    aosDelay:"0",
  },
  {
   
    img:Img4,
    title:"Vedio-Gaming ",
    price:" ₹ 7000",
    aosDelay:"0",
  },
   {
   
    img:Img5,
    title:"Vedio-Gaming ",
    price:" ₹ 7000",
    aosDelay:"0",
  }
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
                <div key={index}>
                  <img src={data.img} alt="" />
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Product