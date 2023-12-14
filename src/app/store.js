import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import authReducer from "../features/auth/authSlice";
import commentReducer from "../features/comments/commentSlice";
import likeReducer from "../features/likes/likesSlice";
import savedReducer from "../features/savedPost/savedPostsSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    comment: commentReducer,
    like: likeReducer,
    saved: savedReducer,
  },
});
