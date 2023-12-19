import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, fetchAllUsers, login, updateUser } from "./authAPI";

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

export const fetchAllUsersAsync = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const response = await fetchAllUsers();
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (personalDetails) => {
    const response = await updateUser(personalDetails);
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
      })
      .addCase(fetchAllUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.status = "idle";
        const index = state.users.findIndex(
          (user) => user.id === action.payload
        );
        state.users.splice(index, 1, action.payload);
      });
  },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;

export const selectAllUsers = (state) => state.auth.users;
export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectLogInError = (state) => state.auth.error;

export default authSlice.reducer;
