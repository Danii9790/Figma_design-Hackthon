import React from 'react'
import Image from 'next/image'
import Features from '@/components/features'
const page = () => {
  return (
      <main className="bg-white">

  {/* Header Section */}
  <div className="relative mt-[40px] bg-gray-100  py-16" style={{backgroundImage:"url('shop.png')"}}>
    <div className="text-center">
    <Image src="/logo.png" alt="Furniro Logo" width={50} height={32} className='ml-[650px]'/>

      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600">
        <a href="/" className="text-blue-500 hover:underline">Home</a> / Contact
      </p>
    </div>
  </div>

  {/* Contact Form Section */}
  <section className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold text-center mb-6">Get In Touch With Us</h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      For more information about our products and services, please feel free to drop us an email. 
      Our staff is always here to help. Do not hesitate!
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section - Contact Information */}
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="text-blue-500 text-xl">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h3 className="font-bold text-lg">Address</h3>
            <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-blue-500 text-xl">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <h3 className="font-bold text-lg">Phone</h3>
            <p className="text-gray-600">Mobile: (+84) 546-6789</p>
            <p className="text-gray-600">Hotline: (+84) 456-6789</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-blue-500 text-xl">
            <i className="fas fa-clock"></i>
          </div>
          <div>
            <h3 className="font-bold text-lg">Working Time</h3>
            <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Abc"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Abc@def.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="This is optional"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Hi! I’d like to ask about..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
  <Features/>
</main>
  )
}

export default page
