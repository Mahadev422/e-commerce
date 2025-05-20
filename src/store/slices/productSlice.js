// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/localData';

const initialState = {
  totalProducts: [],
};


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initializeProduct: (state, action) => {
      state.totalProducts = [...products];
    },
  },
});

export const { initializeProduct } = productsSlice.actions;
export default productsSlice.reducer;
