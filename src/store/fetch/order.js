import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = 'https://shopease-e-commerce-1cik.onrender.com';

  export const postOrder = createAsyncThunk(
  'orders/postOrder',
  async (orderData, thunkAPI) => {
    try {
      const res = await fetch(`${URL}/post-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

  export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (userId, thunkAPI) => {
  try {
    const res = await fetch(`${URL}/get-orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});