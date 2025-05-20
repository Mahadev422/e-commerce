// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, fetchUserById } from '../fetch/user';

const user = JSON.parse(localStorage.getItem('logged'))
const initialState = {
  logged: user || false,
  userDetails: null,
  loading: false,
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
      state.userDetails = action.payload;
    })
  }
});

export const { } = authSlice.actions;
export default authSlice.reducer;
