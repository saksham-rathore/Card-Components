import React from 'react';

const products = [
  {
    id: 1,
    brand: "Vashions",
    title: "Light Faded Blue Puff Jacket",
    price: "1249",
    originalPrice: "3499",
    discount: "64% OFF",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    brand: "Zudio",
    title: "Full-Sleeve White Shirt",
    price: "599",
    originalPrice: "2299",
    discount: "72% OFF",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    brand: "Savana",
    title: "Printed Casual T-shirt",
    price: "899",
    originalPrice: "1999",
    discount: "55% OFF",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    brand: "Vashions",
    title: "Classic Blue T-shirt",
    price: "499",
    originalPrice: "999",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
  }
];

const Akhils = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      {/* Mobile Device Mockup Container */}
      <div className="w-full max-w-[400px] h-[800px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-gray-900 relative flex flex-col">
        
        {/* Mobile Status Bar Placeholder */}
        <div className="h-6 w-full bg-[#f8f9fc]"></div>

        {/* Navbar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#f8f9fc]">
          
          {/* Left Section: Back, Logo, Title */}
          <div className="flex items-center gap-2">
            {/* Back Icon */}
            <button className="p-1 -ml-1 text-gray-600 hover:text-black transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center justify-center text-[#5A55D2]">
              {/* Stylized Cart SVG */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="19" cy="21" r="1.5" fill="currentColor" stroke="none" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-[17px] font-bold text-gray-800 tracking-tight ml-1">
              T-shirts
            </h1>
          </div>

          {/* Right Section: Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            {/* Search */}
            <button className="hover:text-black transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </button>

            {/* Wishlist / Heart */}
            <button className="hover:text-black transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </button>

            {/* Bag with Badge */}
            <button className="relative hover:text-black transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {/* Notification Badge */}
              <span className="absolute -top-[5px] -right-[6px] bg-[#5A55D2] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-[1.5px] border-[#f8f9fc]">
                1
              </span>
            </button>
          </div>
        </div>
        
        {/* Filter Summary (Sub-header) */}
        <div className="px-4 py-2 border-b border-gray-200 bg-white">
          <p className="text-[11px] text-gray-500">
            Showing <span className="text-[#5A55D2] font-semibold">93 results</span> for <span className="underline decoration-gray-300 underline-offset-2">Slim Fit XL Men's</span> T-shirts
          </p>
        </div>

        {/* Content Area */}
        <div className="p-4 bg-white flex-1 overflow-y-auto pb-10 scrollbar-hide">
          <div className="grid grid-cols-2 gap-x-3 gap-y-6">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col cursor-pointer group">
                {/* Product Image */}
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Heart / Wishlist button */}
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                  </button>
                </div>

                {/* Product Details */}
                <div className="mt-2.5 flex flex-col gap-0.5">
                  <h3 className="font-bold text-[13px] text-gray-900 leading-none tracking-tight">
                    {product.brand}
                  </h3>
                  <p className="text-[11px] text-gray-500 truncate">
                    {product.title}
                  </p>
                  
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="font-bold text-[14px] text-gray-900">
                      ₹{product.price}
                    </span>
                    <span className="text-[9px] font-bold tracking-tighter text-[#5A55D2]">
                      TRY<span className="text-gray-400 font-medium mx-[1px]">N</span>BUY
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-[11px] font-bold text-[#5A55D2]">
                      {product.discount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Akhils;