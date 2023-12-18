import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, login } from "./authAPI";

const initialState = {
  users: [],
  //TODO: will change this after making the backend
  loggedInUser: {
    id: 1,
    email: "user@user.com",
    password: "User@123",
    name: "User User",
  },
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const loginAsync = createAsyncThunk("user/login", async (loginInfo) => {
  const response = await login(loginInfo);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

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
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      });
  },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;

export const selectAllUsers = (state) => state.auth.users;
export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectLogInError = (state) => state.auth.error;

export default authSlice.reducer;
