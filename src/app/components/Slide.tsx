import React from 'react'
import Image from 'next/image';

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide:React.FC<propsType> = ({img, title, mainTitle, price}) => {
  return (
    <div className='relative  '>
      <div className='absolute left-[30px] md:left-[70px] mt-10 md:space-y-6'>
        <h3 className='text-pink-900 md:text-5xl text-3xl font-bold font-serif'>{title}</h3>
        <h2 className='text-black font-bold md:text-3xl text-xl font-serif'>{mainTitle}</h2>
        <h3 className='md:text-2xl  font-mono'>starting at{""} <b className='text-xl'>{price}</b>.00</h3>
        <div className=' bg-teal-950 md:text-lg p-2 px-4 tracking-wide rounded-lg text-white inline-block cursor-pointer hover:bg-black'>Shop Now
        </div>
      </div>
      <Image className=" w-[100%] md:h-[550px] "
    src={img}
    alt='banner'
    width={1000}
    height={1000}/>
      
    </div>
  
  )
};

export default Slide
