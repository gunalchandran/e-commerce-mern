import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../../assets/Headphone.png';
import Image2 from '../../../assets/virtual.png';
import Image3 from '../../../assets/macbook.png';
import Button from '../../shared/Buttton.jsx'

const HeroData = [
  {
    id: 1,
    img: Image1,
    Subtitle: 'Beats solo',
    title: 'wireless',
    title2: 'Headphone',
  },
  {
    id: 2,
    img: Image2,
    Subtitle: 'Beats solo',
    title: 'wireless',
    title2: 'virtual',
  },
  {
    id: 3,
    img: Image3,
    Subtitle: 'Beats solo',
    title: 'wireless',
    title2: 'Laptops',
  },
];

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplaySpeed: 1000000,
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1  dark:text-white">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold dark:text-white">{data.Subtitle}</h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold  dark:text-white'>{data.title}</h1>
                    <h1 className='text-5xl uppercase text-white dark:text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                    <div>
                      <Button text="shop Now"bgColor="bg-primary" textColor="text-white"/>
                    </div>
                  </div>
                  {/* Image section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""// Added meaningful alt text
                        className="w-[300px] sm:w-[450px] h-[300px]  sm:h-[450px] sm:scale-105 lg:scale-120 
                        object-contain mx-auto drop-shadow-[-8px_4px_6px_ rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>  
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
