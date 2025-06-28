import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import priceReducer from './priceSlice';

export const store=configureStore({
    reducer:{
        cart:cartSlice,
        price:priceReducer,
    }
})