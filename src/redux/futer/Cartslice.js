import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const creatSlice = createSlice({
   name: "creatSlice",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const productIndex = state.findIndex((pro) => pro.id === action.payload.id);

         if (productIndex === -1) {
            // নতুন প্রোডাক্ট যুক্ত করুন
            state.push({ ...action.payload, quantity: 1 });
         } else {
            // বিদ্যমান প্রোডাক্টের quantity বাড়ান
            state[productIndex].quantity += 1;
         }
      },
      removeFromCart: (state, action) => {
         const id = action.payload;
         return state.filter((item) => item.id !== id);
      },
   },
});

export const { addToCart, removeFromCart } = creatSlice.actions;

export default creatSlice.reducer;
