import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../types/car1";

interface CartState {
  items: Car[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Car>) => {
      const existingCar = state.items.find((car) => car._id === action.payload._id);
      if (!existingCar) {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((car) => car._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
