import React from 'react'
import Button from '../shared/Buttton';
import Image1 from '../../assets/Earphone.png'
import Image2 from '../../assets/watch.png'
import Image3 from '../../assets/macbook.png'
export const Category = () => {
  return (
    <div className='py-8'>
                <div className='container'>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* first col*/}
                        <div className='py-10 pl-5 bg-gradient-to-b from-black 90 to-brand/60 text-white rounded-3xl relative h-[320px] flex items-end '>
                            <div>
                                <div>
                                    <p className='mb-4'>Enjoy</p>
                                    <p className='mb-[2px] text-gray-400 '>with</p>
                                    <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Earphone</p>
                                   <Button text="Browse" bgColor="bg-primary" textColor="text-white"/>
                                </div>
                            </div>
                            <img src={Image1} alt="earphone" className='w-[320px] absolute bottom-0' />
                        </div>
                        {/* second col*/}
                        <div className='py-10 pl-5 bg-gradient-to-b from-black 90 to-brandYellow/60 text-white rounded-3xl relative h-[320px] flex items-end '>
                            <div>
                                <div>
                                    <p className='mb-4'>Enjoy</p>
                                    <p className='mb-[2px] text-gray-400 '>with</p>
                                    <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Watch</p>
                                   <Button text="Browse" bgColor="bg-primary" textColor="text-white"/>
                                </div>
                            </div>
                            <img src={Image2} alt="earphone" className='w-[320px]  absolute -right-10 lg:top-[110px]' />
                        </div>
                        {/* third col*/}
                        <div className='col-span-2 py-10 pl-5 bg-gradient-to-b from-black 90 to-primary/60 relative rounded-3xl text-white h-[320px] flex items-end'>
                            <div>
                                <div className=' space-y-2 mb-4'>
                                    <p className='mb-4'>Enjoy</p>
                                    <p className='mb-[2px] text-gray-300'>With</p>
                                    <p className='text-3xl lg:text-5xl font-bold opacity-60 mb-4'>Laptop</p>
                                    <Button text="browse" textColor="text-white" bgColor="bg-primary"/>
                                </div>
                            </div>
                            <img src={Image3}alt="macbooklap" className=' w-[300px] absolute top-1/2 -translate-y-1/2 -right-0' />
                        </div>
                    </div>
        </div>
    </div>  
  )
}

