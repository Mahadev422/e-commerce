import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = 'https://shopease-e-commerce-1cik.onrender.com';

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (user, thunkAPI) => {
    try {
      const res = await fetch(`https://node-authentication-d8r6.onrender.com/auth/log-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        // Backend sent error with status code
        return thunkAPI.rejectWithValue(data);  // data = {field: 'email'/'password', message: 'Error msg'}
      }

      // Success: store user id or token etc.
      localStorage.setItem('logged', JSON.stringify(data.userId));
      return data; // return user id or token
    } catch (err) {
      return thunkAPI.rejectWithValue({ field: 'general', message: 'Login failed. Try again.' });
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'auth/fetchUserById',
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`${URL}/get-user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const {userData} = await res.json();
      return userData;
    } catch (err) {
      return thunkAPI.rejectWithValue('Failed to fetch user');
    }
  }
);

export const fetchSignup = createAsyncThunk(
  'auth/fetchSignup',
  async (user, thunkAPI) => {
    try {
      const res = await fetch(`${URL}/signup-user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
    } catch (err) {
      return thunkAPI.rejectWithValue('Signup failed');
    }
  }
);

export const updateUserData = createAsyncThunk('auth/updateUserData',
  async ({id, updatedData}, thunkAPI) => {
    try {
      const res = await fetch(`${URL}/update-user`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, updatedData}),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Signup failed');
    };
  }
);

export const updateUserCart = async (id, key, value) => {
    try {
      const res = await fetch(`${URL}/update-cart`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, key, value}),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log('Signup failed');
    };
  };