// redux/priceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subtotal: 0,
  taxes: 0,
  deliveryFee: 0,
  total: 0,
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrices: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearPrices: () => {
      return {
        subtotal: 0,
        taxes: 0,
        deliveryFee: 0,
        total: 0,
      };
    },
  },
});

export const { setPrices, clearPrices } = priceSlice.actions;
export default priceSlice.reducer;
