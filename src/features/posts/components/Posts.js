import React, { useState } from "react";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
  SmilePlus,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { selectPost } from "../postSlice";

export function Posts() {
  const posts = useSelector(selectPost);

  //like and dislike
  const [like, setLike] = useState(false);

  //toggle comments
  const [commentShow, setCommentShow] = useState(false);

  //save toggle
  const [save, setSave] = useState(false);

  return (
    <div className="h-full ">
      {posts &&
        posts.map((post, index) => {
          return (
            <section
              key={index}
              className="w-3/5 lg:w-3/5 md:w-2/3 sm:w-2/3 bg-white shadow-xl m-4 border-4 border-gray-500/50 p-2 "
            >
              <div className=" flex justify-between">
                <SmilePlus color="red" className="h-10" />
                <MoreVertical className="h-10" />
              </div>
              <div className="">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1700422300144-713dad3a1c4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <button onClick={() => setLike(!like)} className="">
                    <Heart
                      fill={like ? "red" : "white"}
                      color={like ? "red" : "black"}
                      size={30}
                      className="mr-4 transition-all h-10"
                    />
                  </button>
                  <button onClick={() => setCommentShow(!commentShow)}>
                    <MessageCircle size={30} className=" transition-all h-10" />
                  </button>
                </div>
                <button onClick={() => setSave(!save)}>
                  <Bookmark
                    fill={save ? "black" : "white"}
                    color="black"
                    className="h-10 transition-all"
                  />
                </button>
              </div>
              <div className="">{post.title}</div>
              {/* toggle comments */}
              {commentShow ? <div>comments</div> : ""}
            </section>
          );
        })}
    </div>
  );
}
