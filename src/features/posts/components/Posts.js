import React, { useState } from "react";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
  Paperclip,
  SmilePlus,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { createNewStatusAsync, selectPost } from "../postSlice";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function Posts() {
  const posts = useSelector(selectPost);

  //like and dislike
  const [like, setLike] = useState(false);

  //toggle comments
  const [commentShow, setCommentShow] = useState(false);

  //save toggle
  const [save, setSave] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="h-full">
      {/* posting form area */}
      <div className="">
        <form
          className=" w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3  m-4 p-2"
          onSubmit={handleSubmit((userData) => {
            console.log({ userData });

            const post = { ...userData };
            post.title = userData.status;
            dispatch(createNewStatusAsync(post));
            reset();
          })}
        >
          <div className="flex flex-col">
            <div>
              <label htmlFor="status">What's on your mind?</label>
            </div>
            <div>
              <textarea
                {...register("status", { required: true })}
                name="status"
                id="status"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-500 mt-2 mb-2 "
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="mr-3  text-sm font-medium text-center px-4 py-2 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post
            </button>
            <button className="cursor-pointer mr-3">
              <Paperclip />
            </button>
          </div>
        </form>
      </div>

      {/* posts area */}
      {posts &&
        posts.map((post, index) => {
          return (
            <Link to={"/post-details"}>
              <section
                key={index}
                className="w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 bg-white shadow-xl m-4 border-4 border-gray-500/50 p-2 "
              >
                <div className=" flex justify-between">
                  <div className="flex items-center">
                    <SmilePlus color="red" className="h-10 mr-3" />
                    <p className="text-slate-900 font-bold hover:italic cursor-pointer">
                      User_Name07
                    </p>
                  </div>
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
                      <MessageCircle
                        size={30}
                        className=" transition-all h-10"
                      />
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
            </Link>
          );
        })}
    </div>
  );
}
