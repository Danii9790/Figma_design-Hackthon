// components/Features.js
import Image from "next/image";
export default function Features() {
    const features = [
      {
        icon: (
         <Image src="/icons/Group.png" alt="cart icon" width={60} height={60}/>
        ),
        title: "High Quality",
        description: "Crafted from top materials",
      },
      {
        icon: (
         <Image src="/icons/warrenty.png" alt="cart icon" width={60} height={60}/>
        ),
        title: "Warranty Protection",
        description: "Over 2 years",
      },
      {
        icon: (
         <Image src="/icons/shipping.png" alt="cart icon" width={60} height={60}/>
        ),
        title: "Free Shipping",
        description: "Order over 150 $",
      },{
        icon: (
         <Image src="/icons/support.png" alt="cart icon" width={60} height={60}/>
        ),
        title: "24/7 Support",
        description: "Dedicated support",
      },
    ];
  
    return (
      <section className="bg-[#FAF3EA] py-8">
        <div className="container mx-auto px-4 flex sm:flex-col md:flex-row lg:flex-row justify-between gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  