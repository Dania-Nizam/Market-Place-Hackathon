"use client"

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromWishlist } from "@/redux/wishlistSlice";

const WishlistPage = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((car) => (
            <div key={car.id} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{car.name}</h2>
              <button
                onClick={() => dispatch(removeFromWishlist(car.id))}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
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
