import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  data: []
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const data = action.payload;

      fetch('http://localhost:3000/add-product', {
        method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => console.log('success', data))
      .catch((err) => console.log('Error while uploading', err));
    },
  }
});

export const { addProduct } = adminSlice.actions;
export default adminSlice.reducer;
