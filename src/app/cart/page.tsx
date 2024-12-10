import React from "react";
import Image from "next/image";
import Features from "@/components/features";
const cart = () => {
  return (
    <main>
      {/* Header Section */}
      <div
        className="bg-gray-100 py-16 text-center mt-[30px] "
        style={{ backgroundImage: "url('shop.png')" }}
      >
        <Image
          src="/logo.png"
          alt="Furniro Logo"
          width={50}
          height={32}
          className="ml-[650px]"
        />

        <h1 className="text-4xl font-bold">Cart</h1>
        <p className="text-gray-500">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          / Blog
        </p>
      </div>
      <div className="w-full px-4 lg:px-20 py-10 bg-gray-50">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section: Product Details */}
          <div className="flex-1 bg-white p-6 shadow rounded-md">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-4 text-left text-sm font-semibold text-gray-600 border-b pb-4">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>

            {/* Product Row */}
            <div className="flex flex-col md:grid md:grid-cols-4 items-center text-center md:text-left py-4 border-b">
              {/* Product */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/sofa5.png" // Replace with actual product image path
                  alt="Product Image"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <p className="text-sm font-medium">Asgaard Sofa</p>
              </div>

              {/* Price */}
              <div className="hidden md:block text-sm font-medium text-gray-600">
                Rs. 250,000.00
              </div>

              {/* Quantity */}
              <div className="mt-4 md:mt-0 flex items-center justify-center">
                <input
                  type="number"
                  className="w-12 text-center border border-gray-300 rounded-md p-1"
                  defaultValue={1}
                  min={1}
                />
              </div>

              {/* Subtotal */}
              <div className="hidden md:block text-sm font-medium text-gray-600">
                Rs. 250,000.00
              </div>
            </div>
          </div>

          {/* Right Section: Cart Totals */}
          <div className="w-full lg:w-1/3 bg-white p-6 shadow rounded-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Cart Totals
            </h2>

            {/* Totals */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-medium text-gray-600">Subtotal</p>
              <p className="text-sm font-medium text-gray-800">
                Rs. 250,000.00
              </p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-sm font-bold text-[#B88E2F]">Rs. 250,000.00</p>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-[#B88E2F] text-white text-sm font-semibold py-3 rounded-lg hover:bg-yellow-600">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <Features />
    </main>
  );
};

export default cart;
