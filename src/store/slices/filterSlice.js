import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterProducts: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    highToLow: (state) => {
      state.filterProducts = [...state.filterProducts].sort((a, b) => b.price - a.price);
    },
    lowToHigh: (state) => {
      state.filterProducts = [...state.filterProducts].sort((a, b) => a.price - b.price);
    },
    allProducts: (state, action) => {
      const products = action.payload;
      state.filterProducts = [...products];
    }
  },
});

export const { lowToHigh, highToLow, allProducts } = filterSlice.actions;
export default filterSlice.reducer;
