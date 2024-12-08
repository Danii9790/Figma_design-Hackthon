import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    
        <div className="relative w-[1349px]">
          {/* Background Image */}
          <div className="relative">
            <Image
              src="/home.png"
              alt="Home Page Image"
              layout="responsive"
              width={1440}
              height={900}
              className="object-cover"
            />
          </div>
    
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-739px w-[543px] h-[443px] mt-[253px] ml-[739px]  flex justify-center items-center px-8 py-6 bg-gradient-to-t from-white/70 to-transparent">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-sm font-bold text-[#000000] uppercase">New Arrival</p>
              <h1 className="text-3xl font-bold text-[#B88E2F] mb-4">
                Discover Our New Collection
              </h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="bg-[#B88E2F] hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      );
    };
    


export default Hero;
