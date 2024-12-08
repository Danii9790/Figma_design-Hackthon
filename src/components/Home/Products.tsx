import Image from "next/image";

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
    image: "/images 2.png",
   
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
  }, {
    title: "Muggo",
    price: "Rp 150.000",
    oldPrice: null,
    image: "/image 6.png",
  }, {
    title: "Pingky",
    price: "Rp 7,000.000",
    oldPrice: "Rp 14,000.000",
    image: "/image 7.png",
  }, {
    title: "Potty",
    price: "Rp 500.000",
    oldPrice: null,
    image: "/image 8.png",
  },
];

const ProductBox = ({ product }: { product: any }) => (
  
  <div className="w-full ">
    {/* Product Card */}
    <div className="group shadow-md bg-neutral-100 w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer rounded-md">
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={100}
        className="object-contain"
      />
      {/* Hover Icons */}
      <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-md">
        Add to Cart
      </button>    
    </div>
    {/* Product Details */}
    <h1 className="font-bold font-sans pt-2 text-sm md:text-2xl lg:text-2xl">{product.title}</h1>
    <div className="flex items-center space-x-2">
      <span className="text-red-500 font-bold">{product.price}</span>
      {product.oldPrice && (
        <span className="text-gray-400 font-bold line-through">
          {product.oldPrice}
        </span>
      )}
    </div>
  </div>
  )

const Products = () => {
  return (
    <main className="bg-gray-100 w-[1236px] h-[684px] py-10 px-6 mt-[150px] ">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
          <div className="justify-center items-center text-center">
            <h1 className="text-slate-800 font-bold text-2xl md:text-3xl mt-2">
              Our Products
            </h1>
          </div>
          <a
            href="#products"
            className="bg-red-500 hover:bg-red-600 px-6 py-2 text-white rounded-md mt-4 md:mt-0"
          >
            View All
          </a>
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