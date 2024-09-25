import React from 'react';
import Button from '../shared/Buttton.jsx';

const ProductCard = ({ data }) => {
  return (
    <div className='mb-10 dark:text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6'>
        {/* Card Section*/}
        {data.map((item) => (
          <div className='group relative' key={item.id}>
            <div className='relative'>
              <img
                src={item.img}
                alt={item.title}
                className='h-[140px] w-[240px] object-cover rounded-md'
              />
              {/* Hover button */}
              <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-opacity duration-300'>
                <Button
                  text={'Add to cart'}
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </div>
            </div>
            <div className='leading-7 mt-3 text-center'>
              <h2 className='font-semibold'>{item.title}</h2>
              <h2 className='font-bold'>{item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
