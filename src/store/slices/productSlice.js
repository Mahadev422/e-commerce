// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/localData';
import { fetchProducts } from '../fetch/products';

const initialState = {
  totalProducts: [],
  loading: false,
};


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initializeProduct: (state, action) => {
      console.log('object')
      state.totalProducts = [...products];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        console.log('pending')
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.totalProducts = action.payload;
        console.log('fulfiled')
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        console.log('rejected');
      })
  }
});

export const { initializeProduct } = productsSlice.actions;
export default productsSlice.reducer;
