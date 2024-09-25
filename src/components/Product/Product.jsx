import React from 'react'
import Headering from '../shared/Headering'
const productsData={
    
}
const Product = () => {
  return (
    <div>
        <div className='container'>
            {/*Header Section*/}
            <Headering title="Our Products" subtitle={"Explore our Products"}/>
            {/*Body Section*/}
            <ProductCard data={productsData}/>
        </div>
    </div>
  )
}

export default Product