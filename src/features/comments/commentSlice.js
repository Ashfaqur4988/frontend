import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllComments, fetchCommentsByPostId } from "./commentAPI";

const initialState = {
  comments: null,
  status: "idle",
  commentsOfPostId: null,
};

export const fetchAllCommentsAsync = createAsyncThunk(
  "comments/fetchAllComments",
  async () => {
    const response = await fetchAllComments();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchCommentsByPostIdAsync = createAsyncThunk(
  "comments/fetchCommentsByPostId",
  async (id) => {
    const response = await fetchCommentsByPostId(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCommentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCommentsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByPostIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCommentsByPostIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.commentsOfPostId = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = commentSlice.actions;

export const selectAllComments = (state) => state.comment.comments;

export const selectCommentsByPostId = (state) => state.comment.commentsOfPostId;

export default commentSlice.reducer;
