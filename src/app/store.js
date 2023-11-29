import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import authReducer from "../features/auth/authSlice";
import commentReducer from "../features/comments/commentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    comment: commentReducer,
  },
});
