import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authAPI";

const initialState = {
  users: [],
  status: "idle",
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users.push(action.payload);
      });
  },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;

export const selectAllUsers = (state) => state.auth.users;

export default authSlice.reducer;
