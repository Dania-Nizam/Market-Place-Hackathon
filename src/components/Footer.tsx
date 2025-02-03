"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 body-font">
      <div className="container mx-auto lg:w-[1380px] px-4 py-12 md:py-24 flex flex-wrap items-start">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-10 md:mb-0">
          <a className="flex justify-center md:justify-start items-center text-gray-900">
            <span className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors">MORENT</span>
          </a>
          <p className="mt-4 text-gray-500">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-3/4 flex flex-wrap -mb-10">
          {/* About Section */}
          <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">About</h2>
            <ul className="mt-4 space-y-2">
              <li><a className="hover:text-blue-600 transition-colors">How it works</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Featured</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Partnership</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Business Relation</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">Community</h2>
            <ul className="mt-4 space-y-2">
              <li><a className="hover:text-blue-600 transition-colors">Events</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Podcast</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Invite a friend</a></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">Socials</h2>
            <ul className="mt-4 space-y-2">
              <li><a className="hover:text-blue-600 transition-colors">Discord</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Instagram</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Twitter</a></li>
              <li><a className="hover:text-blue-600 transition-colors">Facebook</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-1/2 md:w-1/4 px-4">
            <h2 className="text-xl font-semibold text-gray-800">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/category" className="hover:text-blue-600 transition-colors">Category</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="/form" className="hover:text-blue-600 transition-colors">Form</Link></li>
              <li><Link href="/detail" className="hover:text-blue-600 transition-colors">Detail</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          <p className="text-sm text-gray-500">
            ©2022 MORENT. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a className="hover:text-blue-600 transition-colors">Privacy & Policy</a>
            <a className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
