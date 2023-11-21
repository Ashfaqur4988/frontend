import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { fetchAllPostsAsync } from "./features/posts/postSlice";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./features/auth/components/SignUp";
import Login from "./features/auth/components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    <div className="App bg-gray-900">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
