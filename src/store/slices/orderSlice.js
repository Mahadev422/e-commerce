import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders, postOrder } from '../fetch/order';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    order: {},
    loading: false,
    error: null,
    successMessage: null,
    total: 0,
  },
  reducers: {
    totalAmount: (state, action) => {
      state.total = action.payload;
    },
    orderProduct: (state, action) => {
      state.order = {...action.payload};
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetching
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Posting
      .addCase(postOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = 'Order placed successfully!';
        console.log(action.payload);
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { totalAmount, orderProduct } = orderSlice.actions;
export default orderSlice.reducer;
