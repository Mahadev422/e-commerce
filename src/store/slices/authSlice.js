// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, fetchUserById } from '../fetch/user';

const user = JSON.parse(localStorage.getItem('logged'))
const initialState = {
  logged: user || false,
  userDetails: null,
  loading: false,
  wishList: null,
  cart: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUser.fulfilled, (state) => {
      state.loading = true;
    })
    .addCase(fetchUser.rejected, (state) => {
      state.loading = false;
    })
    .addCase(fetchUserById.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = false;
      const userData = action.payload;
      state.userDetails = userData;
      state.cart = userData.cart;
      state.wishList = userData.wishlist;
      state.logged = userData.id;
    })
  }
});

export const { } = authSlice.actions;
export default authSlice.reducer;
