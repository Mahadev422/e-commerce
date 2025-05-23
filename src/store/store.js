import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productSlice';
import authSlice from './slices/authSlice';
import filterSlice from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    auth: authSlice,
    filter: filterSlice,
  },
});
