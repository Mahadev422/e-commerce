// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../fetch/products';

const initialState = {
  totalProducts: [],
  loading: false,
  cartItems: []
};


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      const idSet = new Set(action.payload);

      state.cartItems = state.totalProducts
      .filter(product => idSet.has(product._id))
      .map(product => ({
        ...product,
        quantity: 1
      }));
    },
    updateQunatity: (state, action) => {
      const {id, newQuantity} = action.payload;
      if(newQuantity < 1) return;
      state.cartItems = state.cartItems.map(product => product._id === id
      ? { ...product, quantity: newQuantity } : product );
    },
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
      })
  }
});

export const { initializeCart, updateQunatity } = productsSlice.actions;
export default productsSlice.reducer;
