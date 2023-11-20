import React, { useEffect } from "react";

import { fetchAllPostsAsync } from "./features/posts/postSlice";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPostsAsync());
  }, [dispatch]);
  return (
    <div className="App">
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
