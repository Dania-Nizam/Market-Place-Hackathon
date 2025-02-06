import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice"; // If you already have wishlist

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, // If applicable
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
