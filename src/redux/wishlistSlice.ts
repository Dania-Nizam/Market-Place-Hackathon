import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Car {
  id: string;
  name: string;
  image: string;
}

interface WishlistState {
  items: Car[];
}

// LocalStorage se data load karne ka function
const loadWishlistFromLocalStorage = (): Car[] => {
  if (typeof window !== "undefined") {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  }
  return [];
};

const initialState: WishlistState = {
  items: loadWishlistFromLocalStorage(),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Car>) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
