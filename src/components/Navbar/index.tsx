"use client";
import { CartItem } from "@/app/(root)/types/types";
import Link from "next/link";
import { useState } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaCreditCard,
  FaTrashAlt,
} from "react-icons/fa";

const initialCartItems: CartItem[] = [
  { id: 1, name: "Pizza", price: 12.99, quantity: 2 },
  { id: 2, name: "Burger", price: 8.99, quantity: 1 },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between relative">
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
        <button
          className="relative text-white"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <FaShoppingCart className="h-6 w-6" />
          <span className="sr-only">View cart</span>
          <div className="absolute -top-2 -right-2 bg-red-600 rounded-full h-4 w-4 flex items-center justify-center text-xs">
            {cartItems.length}
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

      {/* Shopping Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute top-16 right-0 w-80 bg-white text-black shadow-lg rounded-lg p-4 z-50">
          <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-gray-600">
                      Qty: {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrashAlt className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition duration-300">
              <FaCreditCard className="h-5 w-5" />
              <span>Checkout</span>
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navbar for Mobile */}
      <nav
        className={`z-50 fixed bottom-0 left-0 w-full bg-gray-800 p-4 transform ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-row items-center justify-between w-full">
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

      {/* Sidebar for Desktop */}
      <nav className=" rounded-md  mb-1 z-50 hidden md:flex md:items-center md:space-x-6 fixed right-0 bottom-0 bg-gray-800 p-4 w-64 transition-transform duration-300 ease-in-out transform md:translate-x-0">
        <ul className="flex flex-col items-start justify-between w-full">
          <li className="flex items-center space-x-4 mb-4">
            <FaShoppingCart className="h-4 w-4 text-white" />
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
