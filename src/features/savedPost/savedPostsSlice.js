import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { savePosts, unSavePosts } from "./savedPostsAPI";

const initialState = {
  savedPosts: [],
  status: "idle",
};

//TODO: deletion issue, needs to be fixed
export const unSavePostsAsync = createAsyncThunk(
  "saved/unSavePost",
  async (savedPostData, thunkAPI) => {
    const { postId, user } = savedPostData;
    const currentState = thunkAPI.getState().saved.savedPosts;
    const index = currentState.findIndex(
      (savedPost) =>
        savedPost.postId === postId && savedPost.user.id === user.id
    );
    console.log("from slice ", index);
    const indexToBeDeleted = index + 1;
    const response = await unSavePosts(indexToBeDeleted);
    return response.data;
  }
);

export const savePostsAsync = createAsyncThunk(
  "saved/savedPost",
  async (savedPostData) => {
    const response = await savePosts(savedPostData);
    return response.data;
  }
);

export const savedSlice = createSlice({
  name: "saved",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(savePostsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(savePostsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.savedPosts.push(action.payload);
      })
      .addCase(unSavePostsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(unSavePostsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.savedPosts.findIndex(
          (savedPost) =>
            savedPost.postId === action.payload.postId &&
            savedPost.user.id === action.payload.user.id
        );
        state.savedPosts.splice(index, 1);
      });
  },
});

export const {} = savedSlice.actions;

export const selectAllSavedPosts = (state) => state.saved.savedPosts;

export default savedSlice.reducer;
