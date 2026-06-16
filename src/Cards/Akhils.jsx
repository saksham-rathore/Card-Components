import React from 'react';

const Akhils = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      {/* Mobile Device Mockup Container */}
      <div className="w-full max-w-[400px] h-[800px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-gray-900 relative">
        
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

        {/* Content Area Placeholder */}
        <div className="p-4 bg-white h-full">
          <div className="grid grid-cols-2 gap-3">
             <div className="h-48 bg-gray-100 rounded-lg animate-pulse"></div>
             <div className="h-48 bg-gray-100 rounded-lg animate-pulse"></div>
             <div className="h-48 bg-gray-100 rounded-lg animate-pulse"></div>
             <div className="h-48 bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Akhils;