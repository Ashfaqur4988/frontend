import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createNewComment,
  deleteComment,
  fetchAllComments,
  fetchCommentsByPostId,
  updateComment,
} from "./commentAPI";

const initialState = {
  comments: [],
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

export const createNewCommentAsync = createAsyncThunk(
  "comments/createNewComment",
  async (comment) => {
    const response = await createNewComment(comment);
    return response.data;
  }
);

export const deleteCommentAsync = createAsyncThunk(
  "comments/deleteCommentAsync",
  async (id) => {
    const response = await deleteComment(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateCommentAsync = createAsyncThunk(
  "comments/updateCommentAsync",
  async (updatedComment) => {
    const response = await updateComment(updatedComment);
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
      })
      .addCase(createNewCommentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewCommentAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comments.push(action.payload);
      })
      .addCase(deleteCommentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCommentAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.comments.findIndex(
          (comment) => comment.id === action.payload
        );
        state.comments.splice(index, 1);
      })
      .addCase(updateCommentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCommentAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.comments.findIndex(
          (comment) => comment.id === action.payload
        );
        state.comments.splice(index, 1, action.payload);
      });
  },
});

export const { increment, decrement, incrementByAmount } = commentSlice.actions;

export const selectAllComments = (state) => state.comment.comments;

export const selectCommentsByPostId = (state) => state.comment.commentsOfPostId;

export default commentSlice.reducer;
