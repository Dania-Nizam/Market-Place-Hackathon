"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoHeart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BsBookmarks, BsCart } from "react-icons/bs";


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
    // Extend functionality here, e.g., perform a search API call
  };

  return (
    <>
      {/* First Navbar Section */}
      <div className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md lg:px-10">
        <div className="flex items-center gap-3">
          <Image src="/command.png" alt="Command Icon" width={32} height={32} />
          <h1 className="text-[#1A202C] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            High Fidelity Dashboard - Home Rent
          </h1>
        </div>

        <div className="flex items-center gap-3 mt-4 lg:mr-14 sm:mt-0">
          <span className="text-[#666666] font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Last Updated:
          </span>
          <span className="text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            8 Aug 2022
          </span>
        </div>
      </div>

      {/* Second Navbar Section */}
      <header className="text-gray-600 bg-white shadow-md body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-[#3563E9] font-sans font-bold text-3xl">
              MORENT
            </span>
          </Link>

          {/* Search Bar */}
          

          
          <form
            onSubmit={handleSearch}
            className="flex items-center border border-gray-300 rounded-full px-3 py-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow outline-none text-gray-700 px-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-[#3563E9] px-4 py-1 rounded-full text-sm font-medium"
            >
              <Link href="/search">Search</Link>
            </button>
          </form>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="p-2 border border-gray-300 rounded-full">
              <IoHeart className="text-gray-600 w-5 h-5" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full">
              <Image src="/notification.png" alt="Notification" width={24} height={24} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full">
              <IoMdSettings className="text-gray-600 w-5 h-5" />
            </button>

            <Link href="/cart" className="headerDiv px-2 gap-x-1 cursor-pointer">
              <BsCart className="text-2xl" />
              
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden mt-6 ml-52 p-2 border border-gray-300 rounded-md"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4">
            <div className="flex flex-col gap-4">
              <button className="p-2 border border-gray-300 rounded-full">
                <IoHeart className="text-gray-600 w-5 h-5" />
              </button>
              <button className="p-2 border border-gray-300 rounded-full">
                <Image src="/notification.png" alt="Notification" width={24} height={24} />
              </button>
              <button className="p-2 border border-gray-300 rounded-full">
                <IoMdSettings className="text-gray-600 w-5 h-5" />
              </button>

              <Link href="/order" className="flex items-center gap-2">
                <BsBookmarks className="text-2xl" />
                <p className="text-sm font-semibold">Orders</p>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
