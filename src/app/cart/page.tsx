"use client";

import React, { useEffect, useState } from "react";
import { Car } from "../../../types/car1";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const [cartItems, setCartItems] = useState<Car[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const car = cartItems.find((item) => item._id === id);
    if (car) handleQuantityChange(id, car.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const car = cartItems.find((item) => item._id === id);
    if (car && car.inventory > 1) handleQuantityChange(id, car.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with payment (Simulate payment success here)
        Swal.fire({
          title: "Processing Payment...",
          text: "Please wait a moment.",
          icon: "info",
        }).then(() => {
          // Simulate payment success (this could be replaced with actual payment logic)
          Swal.fire("Payment Successful!", "Your order has been processed.", "success");

          // Optionally, leave the cart intact without clearing it
          // For example, you can just redirect to a thank-you page or checkout confirmation page
          router.push("/checkout");
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-wrap md:flex-nowrap items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              {item.image && (
                <div className="w-full md:w-1/3 flex justify-center">
                  <Image
                    src={urlFor(item.image).url()}
                    alt="Product Image"
                    className="rounded-lg object-cover"
                    width={2000}
                    height={2000}
                  />
                </div>
              )}

              <div className="flex flex-col md:w-1/3 text-center md:text-left">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600">
                  ${item.price && !isNaN(item.price)
                    ? Number(item.price).toFixed(2)
                    : "0.00"}
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center md:w-1/3 justify-end space-y-3 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleDecrement(item._id)}
                  >
                    -
                  </button>
                  <span className="font-medium">{item.inventory}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleIncrement(item._id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right">
            <h3 className="text-xl font-bold">
              Total: ${calculatedTotal().toFixed(2)}
            </h3>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Page;
