"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { Car } from "../../../types/car1";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Car[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    async function fetchCartItems() {
      const items = await getCartItems();
      setCartItems(items);
    }

    fetchCartItems();

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          const rentData = {
            _type: "rent",
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map((item) => ({
              _type: "reference",
              _ref: item._id,
            })),
            total,
            discount,
            orderDate: new Date().toISOString(),
          };

          try {
            await client.create(rentData);
            localStorage.removeItem("appliedDiscount");
            // Reset the form values after successful payment
            setFormValues({
              firstName: "",
              lastName: "",
              address: "",
              city: "",
              zipCode: "",
              phone: "",
              email: "",
            });
            Swal.fire("Success!", "Your order has been successfully processed!", "success");
          } catch (error) {
            console.error("Error creating order:", error);
            Swal.fire("Error!", "Failed to process your order. Please try again.", "error");
          }
        } else {
          Swal.fire("Error!", "Please fill in all the fields before proceeding.", "error");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto flex items-center gap-2 py-4 text-sm">
        <Link href="/cart" className="text-gray-600 hover:text-black transition">
          Cart
        </Link>
        <CgChevronRight className="w-4 h-4 text-gray-600" />
        <span className="text-gray-900 font-medium">Checkout</span>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                <div className="w-16 h-16 rounded overflow-hidden">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="object-cover hover:scale-105 transition"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                </div>
                <p className="text-sm font-medium">${item.price * item.inventory}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
          <div className="text-right pt-4">
            <p className="text-sm">Subtotal: <span className="font-medium">${subtotal}</span></p>
            <p className="text-sm">Discount: <span className="font-medium">-${discount}</span></p>
            <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Billing Form */}
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold">Billing Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {Object.keys(formValues).map((field) => (
              <div key={field}>
                <label htmlFor={field} className="text-sm font-medium capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  id={field}
                  placeholder={`Enter your ${field}`}
                  value={formValues[field as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-400"
                />
                {formErrors[field as keyof typeof formErrors] && (
                  <p className="text-sm text-red-500">{field.replace(/([A-Z])/g, " $1")} is required.</p>
                )}
              </div>
            ))}
          </div>
          <button
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg mt-6 transition-all shadow-md"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
