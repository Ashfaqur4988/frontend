import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPost } from "./postSlice";

export function Posts() {
  const posts = useSelector(selectPost);

  return (
    <div>
      {posts && (
        <div className="font-serif text-lg inline-flex flex-col justify-center items-center ">
          {posts.map((post) => (
            <p
              key={post.id}
              className=" text-black-400 hover:text-sky-400 hover:cursor-pointer "
            >
              {post.body}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
