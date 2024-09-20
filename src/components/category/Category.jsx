import React from 'react'
import Button from '../shared/Buttton';
import Image1 from '../../assets/Earphone.png'
export const Category = () => {
  return (
    <div className='py-8'>
                <div className='container'>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* first col*/}
                        <div className='py-10 pl-5 bg-gradient-to-b from-black 90 to-black/60 text-white rounded-3xl relative h-[320px] flex items-end '>
                            <div>
                                <div>
                                    <p className='mb-4'>Enjoy</p>
                                    <p className='mb-[2px]'>with</p>
                                    <p>Earphone</p>
                                   <Button text="Browse" bgColor="bg-primary" textColor="text-white"/>
                                </div>
                            </div>
                            <img src={Image1} alt="earphone" className='w-[320px] absolute bottom-0' />
                        </div>
                        {/* second col*/}
                        {/* third col*/}
                    </div>
        </div>
    </div>  
  )
}
