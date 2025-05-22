import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = 'https://shopease-e-commerce-1cik.onrender.com';

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (user, thunkAPI) => {
    try {
      const res = await fetch(`${URL}/login-user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      data.length === 24 ? localStorage.setItem('logged', JSON.stringify(data)) : null;
    } catch (err) {
      return thunkAPI.rejectWithValue('Login failed');
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