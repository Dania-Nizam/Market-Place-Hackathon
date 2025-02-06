import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Car } from "../../types/car1";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";
import { IoHeart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "@/redux/wishlistSlice";
import { RootState } from "../redux/store";

const Recommendation = () => {
  const [carsFromSanity, setCarsFromSanity] = useState<Car[]>([]);
  const [isMounted, setIsMounted] = useState(false); // Flag for client-side rendering
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const cart = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    setIsMounted(true); // Ensure rendering only on the client side
  }, []);

  useEffect(() => {
    async function fetchCars() {
      const fetchedCars: Car[] = await client.fetch(allCars);
      setCarsFromSanity(fetchedCars);
    }
    fetchCars();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, car: Car) => {
    e.preventDefault();

    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${car.name} added to cart!`,
      text: "You can view your cart or continue shopping.",
      showConfirmButton: true,
      confirmButtonText: "Go to Cart",
      confirmButtonColor: "#3563E9",
      showCancelButton: true,
      cancelButtonText: "Continue Shopping",
      cancelButtonColor: "#D1D5DB",
      timer: 900,
      timerProgressBar: true,
      didClose: () => {
        addToCart(car); // Add car to cart after alert closes
      },
    });
  };

  const isWishlisted = (car: Car) => wishlist.some((item) => item.id === car._id);

  const handleWishlist = (car: Car) => {
    const carWithId = {
      ...car,
      id: car._id,
      image: car.image ? urlFor(car.image).url() : "", // Convert image to URL
    };

    if (isWishlisted(carWithId)) {
      dispatch(removeFromWishlist(carWithId.id));
    } else {
      dispatch(addToWishlist(carWithId));
    }
  };

  if (!isMounted) {
    return null; // Prevent rendering before client-side hydration is complete
  }

  return (
    <div className="p-6 w-full xl:w-[1350px] bg-[#F6F7F9] mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-base font-semibold text-[#90A3BF]">Recommended Cars</h2>
      </div>

      {/* Grid for cars fetched from Sanity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {carsFromSanity.map((car) => (
          <Link href={`/car/${car.slug?.current}`} key={car._id}>
            <div className="border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between h-[350px]">
              <div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  {car.type && <p className="text-sm text-gray-500">{car.type}</p>}
                </div>

                <Link href={`/car/${car.slug?.current}`}>
                  {car.image && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={urlFor(car.image).url()}
                        alt={car.name}
                        className="object-cover rounded-md"
                        width={232}
                        height={120}
                      />
                    </div>
                  )}
                </Link>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500">
                  {car.fuelCapacity && (
                    <p>
                      {car.fuelCapacity}
                      <Image src="/gas.png" alt="Fuel" width={24} height={24} />
                    </p>
                  )}
                  {car.transmission && (
                    <p>
                      {car.transmission}
                      <Image src="/c.png" alt="Transmission" width={24} height={24} />
                    </p>
                  )}
                  {car.seatingCapacity && (
                    <p>
                      {car.seatingCapacity} People
                      <Image src="/pro.png" alt="People" width={24} height={24} />
                    </p>
                  )}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-bold">
                    {car.price
                      ? `$${Number(car.price).toFixed(2)} / day`
                      : "Price not available"}
                    {car.originalPrice && (
                      <span className="text-sm line-through text-gray-400 ml-2">
                        ${Number(car.originalPrice).toFixed(2)}
                      </span>
                    )}
                  </p>

                  <button
                    className="w-[116px] h-[44px] bg-[#3563E9] text-white rounded-[4px] hover:bg-blue-600"
                    onClick={(e) => handleAddToCart(e, car)}
                  >
                    Rent Now
                  </button>
                </div>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => handleWishlist(car)}
                className={`p-2 rounded-full ${isWishlisted(car) ? "text-red-500" : "text-gray-600"} hover:bg-gray-200 transition absolute top-4 right-4`}
              >
                <IoHeart className="w-6 h-6" />
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link href="/category">
          <button className="w-[156px] h-[44px] rounded-[4px] bg-[#3563E9] text-white hover:bg-blue-600">
            Show more cars
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Recommendation;
