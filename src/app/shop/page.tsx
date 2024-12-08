import React from 'react'
import Image from 'next/image'
import Features from '@/components/features';
const shop= () => {
  const products = [
    {
      id: 1,
      name: 'Syltherine',
      caption:"Style cafe table",
      price: 'Rp 2,500,000',
      oldPrice:'Rp 35,000.000',
      image: '/image 1.png',
      tag: 'Sale Off to 30%',
    },
    {
      id: 2,
      name: 'Leviosa',
      caption:"Style cafe chair",
      price: 'Rp 2,000,000',
      image: '/image 2.png',
      tag: 'New',
    },
    {
      id: 3,
      name: 'Lolito',
      caption:"Luxury big sofa",
      price: 'Rp 7,000,000',
      oldPrice:"Rp 14,000.000",
      image: '/image 3.png',
      tag: 'Sale Off to 50%',
    },
    {
      id: 4,
      name: 'Respire',
      caption:"Outdoor bar table stool",
      price: 'Rp 5,000,000',
      image: '/image 4.png',
      tag: 'New',
    },
    {
      id: 5,
      name: 'Syltherine',
      caption:"Style cafe table",
      price: 'Rp 2,500,000',
      oldPrice:'Rp 35,000.000',
      image: '/image 1.png',
      tag: 'Sale Off to 30%',
    },
    {
      id: 6,
      name: 'Leviosa',
      caption:"Style cafe chair",
      price: 'Rp 2,000,000',
      image: '/image 2.png',
      tag: 'New',
    },
    {
      id: 7,
      name: 'Lolito',
      caption:"Luxury big sofa",
      price: 'Rp 7,000,000',
      oldPrice:"Rp 14,000.000",
      image: '/image 3.png',
      tag: 'Sale Off to 50%',
    },
    {
      id: 8,
      name: 'Respire',
      caption:"Outdoor bar table stool",
      price: 'Rp 5,000,000',
      image: '/image 4.png',
      tag: 'New',
    },
    {
      id: 9,
      name: 'Syltherine',
      caption:"Style cafe table",
      price: 'Rp 2,500,000',
      oldPrice:'Rp 35,000.000',
      image: '/image 1.png',
      tag: 'Sale Off to 30%',
    },
    {
      id: 10,
      name: 'Leviosa',
      caption:"Style cafe chair",
      price: 'Rp 2,000,000',
      image: '/image 2.png',
      tag: 'New',
    },
    {
      id: 11,
      name: 'Lolito',
      caption:"Luxury big sofa",
      price: 'Rp 7,000,000',
      oldPrice:"Rp 14,000.000",
      image: '/image 3.png',
      tag: 'Sale Off to 50%',
    },
    {
      id: 12,
      name: 'Respire',
      caption:"Outdoor bar table stool",
      price: 'Rp 5,000,000',
      image: '/image 4.png',
      tag: 'New',
    },
  ];

  return (
    <main className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-100 py-16 text-center mt-[30px] " style={{backgroundImage:"url('shop.png')"}}>
      <Image src="/logo.png" alt="Furniro Logo" width={50} height={32} className='ml-[650px]'/>

        <h1 className="text-4xl font-bold">Shop</h1>
        <p className="text-gray-500">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{' '}
          / Shop
        </p>
      </div>

      {/* Filter and Sorting Options */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-4 items-center">
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Filter
            </button>
            <p className="text-gray-600">Showing 1–10 of 32 results</p>
          </div>
          <div className="flex gap-4 items-center">
            <span>Show:</span>
            <select className="border-gray-300 rounded-lg px-2 py-1">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
            <span>Sort by:</span>
            <select className="border-gray-300 rounded-lg px-2 py-1">
              <option>Default</option>
              <option>Price</option>
              <option>Popularity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg overflow-hidden group"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                  <p className="text-gray-400">{product.caption}</p>

                </h3>
                <div className='flex justify-between'>
                <p className="text-gray-700">{product.price}</p>
                <p className="text-gray-600 font-bold line-through">{product.oldPrice}</p>
                </div>

              </div>
              <div className="p-4 flex justify-between items-center border-t">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
                  Add to Cart
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Features/>

    </main>
  );
};

export default shop;

