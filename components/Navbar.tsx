// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full h-24 bg-[#485494] flex items-center px-4 border border-black">
      <div className="flex-1" />
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full p-3.5 pl-10 pr-12 rounded-lg border border-black placeholder-black bg-custom-bg focus:outline-none"
        />
        <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-icon-xl"></i>
      </div>

      <Link href="/add-items">
        <button className="absolute top-[10rem] right-[4.3rem] z-10 bg-[#485494] text-white rounded-full  flex items-center justify-center">
          <Image src="/addBtn.png" alt="Plus" width={71} height={71} />
        </button>
      </Link>
    </header>
  );
};

export default Header;
