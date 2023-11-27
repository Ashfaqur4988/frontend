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
import { selectLoggedInUser } from "../../auth/authSlice";

export function Posts() {
  //selecting all post
  const posts = useSelector(selectPost);

  //like and dislike
  const [like, setLike] = useState(false);

  //toggle comments
  const [commentShow, setCommentShow] = useState(false);

  //save toggle
  const [save, setSave] = useState(false);

  //toggle 3 dots menu
  const [verticalDotsMenu, setVerticalDotsMenu] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="h-full flex flex-col items-center">
      {/* posting form area */}
      <div className=" w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 border-4 border-gray-500/50 mt-2 p-3">
        <form
          className=" w-full flex flex-col"
          onSubmit={handleSubmit((userData) => {
            console.log({ userData });

            const post = { ...userData };
            post.title = userData.status;
            dispatch(createNewStatusAsync(post));
            reset();
          })}
        >
          <div className="flex flex-col w-full">
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
              className="mr-3  text-sm font-medium text-center px-4 py-2
                         text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200
                        hover:bg-blue-800 w-20 lg:w-20 md:w-16 sm:w-12"
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
            <>
              <section
                key={index}
                className="w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 bg-white shadow-xl m-4 border-4 border-gray-500/50 p-2 "
              >
                <div className=" flex justify-between ">
                  <Link to={"user-profile"}>
                    <div className="flex items-center">
                      <SmilePlus color="red" className="h-10 mr-3" />
                      <p className="text-slate-900 font-bold hover:italic cursor-pointer">
                        User_Name
                      </p>
                    </div>
                  </Link>
                  <div
                    className="cursor-pointer relative"
                    onClick={() => setVerticalDotsMenu(!verticalDotsMenu)}
                  >
                    <MoreVertical className="h-10" />
                    {verticalDotsMenu ? (
                      <button
                        onClick={() => console.log("report")}
                        className="absolute top-8 left-3 rounded-br-xl rounded-tr-xl rounded-bl-xl cursor-pointer bg-gray-200 text-red-900 font-bold w-16 h-8  text-center"
                      >
                        report
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <Link to={"/post-details"}>
                  <div className="">
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1700422300144-713dad3a1c4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="text-slate-700 font-bold">{post.title}</div>
                </Link>

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

                {/* toggle comments */}
                {commentShow ? <div>comments</div> : ""}
              </section>
            </>
          );
        })}
    </div>
  );
}
