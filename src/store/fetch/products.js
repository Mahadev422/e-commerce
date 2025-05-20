import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = 'https://shopease-e-commerce-1cik.onrender.com';
export const fetchProducts = createAsyncThunk(
  'cart/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${URL}/get-products`);
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);