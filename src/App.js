import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { fetchAllPostsAsync } from "./features/posts/postSlice";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./features/auth/components/SignUp";
import Login from "./features/auth/components/Login";
import Protected from "./features/auth/components/Protected";
import PostDetailsPage from "./pages/PostDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import SettingsPage from "./pages/SettingsPage";
import MyProfilePage from "./pages/MyProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/post-details/:id",
    element: <PostDetailsPage />,
  },
  {
    path: "/user-profile",
    element: <UserProfilePage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/my-profile/:id",
    element: <MyProfilePage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPostsAsync());
  }, [dispatch]);
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
