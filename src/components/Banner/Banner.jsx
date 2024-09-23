import React from 'react'
import Laptop from '../../assets/macbook.png';
const BannerData={
    discount:"40% Off",
    title:"Fine Smile",
    date:"23 sep to 30 Sep",
    image:Laptop,
    title2:"AsusVivobook",
    title3:"Aadi sales",
    title4:"Asus vivoBook almost the best one for Work",
    bgColor:"#121212",
}
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 text-white pt-1'>
        <div className='container'>
            <div  style={{backgroundColor:BannerData.bgColor}} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center rounded-3xl'>
                {/* first col*/}
                <div className='p-6 sm:p-8'>
                    <p className='text-sm'>{BannerData.discount}</p>
                    <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{" "}{BannerData.title}</h1>
                    <p className='text-sm'>{BannerData.date}</p>
                </div>
                {/* second col*/}
                <div className='h-full flex items-center '>
                    <img src={BannerData.image} alt="Laptop" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover'/>
                </div>
                {/* third col*/}
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p className='font-bold text-xl'>{BannerData.title2}</p>
                    <p className='text-3xl sm:text-5xl font-bold'>{BannerData.title3}</p>
                    <p className='text-sm tracking-wide leading-5 '>{BannerData.title4}</p>
                    <div>
                        <button className='bg-primary text-white py-2 px-4 rounded-3xl'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner