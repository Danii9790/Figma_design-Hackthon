import Image from "next/image";
import { Button } from "@/components/ui/button"; // Using shadcn button component

const products = [
  {
    title: "Syltherine",
    price: "Rp 2,500.000",
    oldPrice: "Rp 3,500.000",
    image: "/image 1.png",
  },
  {
    title: "Leviosa",
    price: "Rp 2,500.000",
    oldPrice: null,
    image: "/image 2.png",
  },
  {
    title: "Lolito",
    price: "Rp 7,000.000",
    oldPrice: "Rp 14,000.000",
    image: "/image 3.png",
  },
  {
    title: "Respira",
    price: "Rp 500.000",
    oldPrice: null,
    image: "/image 4.png",
  },
  {
    title: "Grifo",
    price: "Rp 1,500.000",
    oldPrice: null,
    image: "/image 5.png",
  },
  {
    title: "Muggo",
    price: "Rp 150.000",
    oldPrice: null,
    image: "/image 6.png",
  },
  {
    title: "Pingky",
    price: "Rp 7,000.000",
    oldPrice: "Rp 14,000.000",
    image: "/image 7.png",
  },
  {
    title: "Potty",
    price: "Rp 500.000",
    oldPrice: null,
    image: "/image 8.png",
  },
];

const ProductBox = ({ product }: { product: any }) => (
  <div className="w-full">
    {/* Product Card */}
    <div className="group shadow-md bg-neutral-100 flex justify-center items-center relative cursor-pointer rounded-md h-[200px]">
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={100}
        className="object-contain"
      />
      {/* Hover Button */}
      <Button
        variant="ghost"
        className="absolute bottom-0 bg-black text-white w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Add to Cart
      </Button>
    </div>
    {/* Product Details */}
    <h1 className="font-bold pt-2 text-sm lg:text-lg">{product.title}</h1>
    <div className="flex items-center space-x-2">
      <span className="text-red-500 font-bold">{product.price}</span>
      {product.oldPrice && (
        <span className="text-gray-400 font-bold line-through">
          {product.oldPrice}
        </span>
      )}
    </div>
  </div>
);

const Products = () => {
  return (
    <main className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-10 mt-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
          <h1 className="text-slate-800 font-bold text-xl sm:text-2xl lg:text-3xl">
            Our Products
          </h1>
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md">
            View All
          </Button>
        </div>
        {/* Products Grid */}
        <div
          id="products"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
        >
          {products.map((product, index) => (
            <ProductBox key={index} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
