// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, fetchUserById, updateUserCart, updateUserData } from '../fetch/user';

const userId = JSON.parse(localStorage.getItem('logged'))
const initialState = {
  logged: userId || false,
  userDetails: null,
  loading: false,
  wishList: [],
  cart: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if(!id) return;
      state.cart.push(id);
      updateUserCart(userId, 'cart', [...state.cart]);
    },
    removeToCart: (state, action) => {
      const id = action.payload;
      if(!id) return;
      state.cart = state.cart.filter(idx => idx !== id);
      updateUserCart(userId, 'cart', [...state.cart]);
    },
    addToWishlist: (state, action) => {
      const id = action.payload;
      state.wishList.push(id);
      updateUserCart(userId, 'wishlist', [...state.wishList]);
    },
    removeToWishlist: (state, action) => {
      const id = action.payload;
      state.wishList = state.wishList.filter((idx) => idx !== id);
      updateUserCart(userId, 'wishlist', [...state.wishList]);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUser.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(fetchUser.rejected, (state) => {
      state.loading = false;
    })
    .addCase(fetchUserById.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUserById.fulfilled, (state, action) => {
      const userData = action.payload;
      state.userDetails = userData;
      state.cart = userData.cart;
      state.wishList = userData.wishlist;
      state.logged = userData.id;
      state.loading = false;
    })
    .addCase(updateUserData.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateUserData.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.loading = false;
    })
    .addCase(updateUserData.rejected, (state) => {
      state.loading = false;
    })
  }
});

export const { addToCart, addToWishlist, removeToCart, removeToWishlist } = authSlice.actions;
export default authSlice.reducer;
