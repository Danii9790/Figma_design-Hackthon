import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <main>
    <div className="top-0 bg-[#FAFAFA]  flex justify-between items-center w-[1349px] h-[35px] max-w-[1365px] mx-auto pt-10 ">
    {/* Logo and Brand Name */}
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" alt="Furniro Logo" width={50} height={32} />
      <h1 className="text-2xl font-bold text-black">Furniro</h1>
    </div>
  
    {/* Navigation Links */}
    <nav className="hidden md:flex space-x-8 items-center">
      <a href="/" className="text-black underline hover:text-gray-700 transition">
        Home
      </a>
      <a href="/shop" className="text-black underline hover:text-gray-700 transition">
        Shop
      </a>
      <a href="/blog" className="text-black underline hover:text-gray-700 transition">
        Blog
      </a>
      <a href="/contact" className="text-black underline hover:text-gray-700 transition">
        Contact
      </a>
    </nav>
  
    {/* Icons Section */}
    <div className="flex items-center space-x-6">
      <Image
        src="/icons/Vector.png"
        alt="Menu icon"
        width={23.33}
        height={18.67}
        className="cursor-pointer"
      />
      <Image
        src="/icons/search.png"
        alt="Search icon"
        width={22.17}
        height={22.17}
        className="cursor-pointer"
      />
      <Image
        src="/icons/heart.png"
        alt="Wishlist icon"
        width={23.33}
        height={20.81}
        className="cursor-pointer"
      />
      <Image
        src="/icons/cart.png"
        alt="Shopping cart icon"
        width={24.53}
        height={22.06}
        className="cursor-pointer"
      />
    </div>
  </div>
  </main>
  
  )
}

export default Header
