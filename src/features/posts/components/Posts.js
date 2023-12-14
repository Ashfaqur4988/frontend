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
import SinglePost from "./SinglePost";

export function Posts() {
  //selecting all post
  const posts = useSelector(selectPost);
  const user = useSelector(selectLoggedInUser);

  //like and dislike

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
      bg-fixed bg-cover"
    >
      <div className="h-full flex flex-col items-center ">
        {/* posting form area */}
        <div className=" w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 mt-2 p-3">
          <form
            className=" w-full flex flex-col"
            onSubmit={handleSubmit((post) => {
              console.log({ post });

              const newPost = { ...post };
              newPost.status = post.status;
              //todo: need to make logged in user data persistent
              newPost.userId = 1; //user.id;
              newPost.userName = "User User"; //user.name;
              // console.log({ newPost });
              dispatch(createNewStatusAsync(newPost));
              reset();
            })}
          >
            <div className="flex flex-col w-full">
              <div>
                <textarea
                  {...register("status", { required: true })}
                  name="status"
                  id="status"
                  placeholder="What's on your mind?"
                  className="block p-2.5 w-full text-sm text-black bg-gray-100 rounded-lg border border-gray-500 mt-2 mb-2 "
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
                <Paperclip color="white" />
              </button>
            </div>
          </form>
        </div>

        {/* posts area */}
        {posts &&
          posts.map((post) => {
            return (
              <>
                <section
                  key={post.id}
                  className="w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 bg-white shadow-xl m-4 border-4 border-gray-500/50 p-2 "
                >
                  <SinglePost post={post} />
                </section>
              </>
            );
          })}
      </div>
    </div>
  );
}
