import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addLike, deleteLike } from "./likesAPI";

const initialState = {
  likes: [],
  status: "idle",
  likesByPostId: null,
};

export const deleteLikeAsync = createAsyncThunk(
  "likes/deleteLikes",
  async (likeData, thunkAPI) => {
    const { postId, user } = likeData;
    const currentState = thunkAPI.getState().like.likes;
    const index = currentState.findIndex(
      (like) => like.postId === postId && like.user.id === user.id
    );
    console.log("from slice ", index);
    const indexToBeDeleted = index + 1;
    const response = await deleteLike(indexToBeDeleted);
    return response.data;
  }
);

export const addLikeAsync = createAsyncThunk(
  "likes/addLikes",
  async (likeData) => {
    const response = await addLike(likeData);
    return response.data;
  }
);

export const likesSlice = createSlice({
  name: "likes",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addLikeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addLikeAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.likes.push(action.payload);
      })
      .addCase(deleteLikeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteLikeAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.likes.findIndex(
          (like) =>
            like.postId === action.payload.postId &&
            like.user.id === action.payload.user.id
        );
        state.likes.splice(index, 1);
      });
  },
});

export const {} = likesSlice.actions;

export const selectAllLikes = (state) => state.like.likes;

export default likesSlice.reducer;
