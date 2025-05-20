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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.totalProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.totalProducts = products;
      })
  }
});

export const { initializeProduct } = productsSlice.actions;
export default productsSlice.reducer;
