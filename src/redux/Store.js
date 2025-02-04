
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/futer/Cartslice";
import authSlice from "../database/AuthSlice"

export const store = configureStore({
   reducer: {
      cart: cartReducer, 
      auth: authSlice,
   },
});
