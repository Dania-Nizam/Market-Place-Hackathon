"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromWishlist } from "@/redux/wishlistSlice";
import { HeartOff } from "lucide-react";
import Image from "next/image";

const WishlistPage = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-10">
          <HeartOff size={50} className="text-red-500 mb-4" />
          <p className="text-lg">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((car) => (
            <div
              key={car.id}
              className="p-5 border rounded-lg shadow-md bg-white hover:shadow-xl transition relative"
            >
              {/* Car Image */}
              <div className="relative w-full h-full mb-4">
                <Image
                  src={car.image} 
                  alt={car.name}
                 
                  layout="fill"
                  
                  className="rounded-md"
                />
              </div>

              {/* Car Details */}
              <h2 className="text-lg font-semibold text-gray-900">{car.name}</h2>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromWishlist(car.id))}
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
