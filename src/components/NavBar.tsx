"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoCarSportOutline, IoHeart, IoSearchCircleOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";

const Navbar: React.FC = () => {
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );

  const cartCount = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession(); // Get session data
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false); // Client-side mount check

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after the first render
  }, []);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
  };

  if (!isMounted) {
    return null; // Avoid rendering until the component is mounted
  }

  return (
    <header className="text-gray-600 bg-white shadow-md body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 hover:text-[#3563E9] transition duration-300"
        >
          <span className="ml-3 text-[#3563E9] font-sans font-bold text-3xl">
            MORENT
          </span>
        </Link>

         {/* Search Bar with Hover Effect */}
         <Link href="/search" className="px-1 xl:ml-[600px] lg:ml-[290px] md:ml-[230px] gap-x-1 cursor-pointer p-1 border md:block hidden border-gray-300 rounded-full hover:bg-[#f0f0f0] transition duration-300"><IoSearchCircleOutline  className="w-10 h-10"/></Link>
        

        {/* Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Wishlist */}
          <div className="relative">
            <Link href="/wishlist">
              <div className="relative p-2 border rounded-full hover:bg-gray-200 transition">
                <IoHeart className="text-gray-600 w-6 h-6 hover:text-red-500" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 border rounded-full hover:bg-gray-200 transition"
          >
            <BsCart className="text-gray-600 w-6 h-6 hover:text-[#3563E9]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Filter Icon */}
          <Link href="/category">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-[#f0f0f0] transition duration-300">
              <IoCarSportOutline className="text-gray-600 w-6 h-6 hover:text-[#3563E9]" />
            </button>
          </Link>

          {/* Review Icon */}
          <Link href="/review">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-[#f0f0f0] transition duration-300">
              <MdRateReview className="text-gray-600 w-6 h-6 hover:text-[#3563E9]" />
            </button>
          </Link>
        </div>

        {/* Login/Register or Logout (Desktop) */}
        {!session ? (
          <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:bg-[#f0f0f0] transition duration-300">
            <AiOutlineUser className="text-xl" />
            <p
              onClick={() => signIn()}
              className="text-sm font-semibold text-[#3563E9]"
            >
              Login/Register
            </p>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-2">
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt="User Image"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            )}
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 p-2 text-sm font-semibold text-[#3563E9] hover:bg-[#f0f0f0] transition duration-300"
            >
              <FiLogOut className="text-xl" />
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 border border-gray-300 rounded-md"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <div className="flex flex-col gap-4">
            <form
              onSubmit={handleSearch}
              className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full"
            >
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow outline-none text-gray-700 px-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Link href="/search">
                <button
                  type="submit"
                  className="text-white bg-[#3563E9] px-4 py-1 rounded-full text-sm font-medium"
                >
                  Search
                </button>
              </Link>
            </form>
            <Link href="/wishlist">
              <button className="p-2 border border-gray-300 rounded-full hover:bg-[#f0f0f0] transition duration-300">
                <IoHeart className="text-gray-600 w-5 h-5 hover:text-[#3563E9]" />
              </button>
            </Link>
            <Link href="/cart" className="p-2 border border-gray-300 rounded-full hover:bg-[#f0f0f0] transition duration-300">
              <BsCart className="text-gray-600 w-5 h-5 hover:text-[#3563E9]" />
            </Link>
            <Link href="/category">
              <button className="p-2 border border-gray-300 rounded-full hover:bg-[#f0f0f0] transition duration-300">
                <IoCarSportOutline className="text-gray-600 w-6 h-6 hover:text-[#3563E9]" />
              </button>
            </Link>
            {!session ? (
              <button
                onClick={() => signIn()}
                className="flex items-center gap-2 p-2 border border-gray-300 rounded-full hover:bg-[#f0f0f0] transition duration-300"
              >
                <AiOutlineUser className="text-xl" />
                <p className="text-sm font-semibold">Login/Register</p>
              </button>
            ) : (
              <>
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt="User Image"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                )}
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 p-2 border border-gray-300 rounded-full hover:bg-[#f0f0f0] transition duration-300"
                >
                  <FiLogOut className="text-xl" />
                  <p className="text-sm font-semibold">Logout</p>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
