import React from 'react'
import Image from 'next/image'
const Beautyroom = () => {
  return (
    <main className='w-[1249px] h-[500px] mt-[100px] bg-[#FCF8F3] '>
    <div className='w-[400px] h-[px] mt-[160px] ml-[80px] text-[#3A3A3A] font-poppins sm:text-sm md:text-2xl lg:text-2xl font-bold size-10 leading-6'>
    <h1>50+ Beautiful rooms 
      inspiration</h1>
    </div>
    <div className='w-[368px] h-[48px] ml-[100px] mt-[10px] '>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
    </div>
    <div className='w-[176px] h-[48px] ml-[100px] mt-[60px] bg-[#B88E2F] text-[#FFFFFF]'>
        <button className='w-[104px] h-[24px] ml-[43px] mt-[10px] '>Explore More</button>
        <ul className='flex'>
       <li>
        <Image src="/beautyroom2.png" alt='beautyroom image 1' width={304} height={382} className='ml-[550px] mt-[-280px]'/>
        </li>
        </ul>
    </div>
  
    </main>
  )
}

export default Beautyroom
