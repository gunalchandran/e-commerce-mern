import React from 'react'
import Headering from '../shared/Headering'
import img1 from '../../assets/Handwatch.jpg'
import img2 from '../../assets/All image.jpg'
import img3 from '../../assets/VR.jpg'
const BlogData=[
    {
    title: "how to choose perfect SmartWatch",
    subtitle:"minima facere askhfkjaskfgajfdgjagdfjasjdf hjhriewtugjsabfhuiwehwugfhkt",
    published:"Aug 20,2024 by Gunal",
    img:img1,
    },
    {
        title: "how to choose perfect SmartWatch",
        subtitle:"minima facere askhfkjaskfgajfdgjagdfjasjd fhjhriewtugj sabfhuiwehwugfhkt",
        published:"Aug 20,2024 by Gunal",
        img:img2,
        },
        {
            title: "how to choose perfect SmartWatch",
            subtitle:"minima facere askhfkjaskfgajfdgjag dfjasjdfhjhriewtugjsabfhuiwehwugfhkt",
            published:"Aug 20,2024 by Gunal",
            img:img3,
        },
]
const Blog = () => {
  return (
    <div>
        <div className="container dark:text-white">
            {/* Header section */}
            <Headering title={"Recent Update"} subtitle={"Explore Our Products"} />
            {/* Body section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 dark:text-white">
                {/* blog card */}{
                BlogData.map((data)=>(
                    <div>
                        <div>
                          {/* image section */}
                          <div>
                            <img src={data.img} alt="" className='w-[320px] h-[320px]'/>
                          </div>
                          {/* content section */}
                          <div className='text-xs text-gray-350 '>
                            <p className='font-bold line-clamp-1'>{data.published}</p>
                            <p className='space-y-1 '>{data.title}</p>
                            <p>{data.subtitle}</p>
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blog