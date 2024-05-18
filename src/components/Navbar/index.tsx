"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaCreditCard } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const totalPrice = 123.45;
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <Link href="/">
        <img
          alt="Acme Eatery"
          className="h-8"
          src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
          style={{
            objectFit: "cover",
          }}
          width={100}
        />
      </Link>
      <div className="flex items-center space-x-4">
        <button className="relative text-white">
          <FaShoppingCart className="h-6 w-6" />
          <span className="sr-only">Add to cart</span>
          <div className="absolute -top-2 -right-2 bg-red-600 rounded-full h-4 w-4 flex items-center justify-center text-xs">
            3
          </div>
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>
      <nav
        className={`z-50 fixed bottom-0 left-0 w-full bg-gray-800 p-4 transform ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-y-0 md:bg-transparent md:flex md:items-center md:space-x-6`}
      >
        <ul className="flex flex-row items-center justify-between w-full md:flex-row">
          <li className="flex items-center space-x-4">
            <FaShoppingCart className="h-6 w-6 text-white" />
            <span className="text-xl text-white">
              Total: ${totalPrice.toFixed(2)}
            </span>
          </li>
          <li>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition duration-300">
              <FaCreditCard className="h-5 w-5" />
              <span>Checkout</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
