import {
  BookmarkCheck,
  CalendarDays,
  Image,
  Link,
  Paperclip,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createNewStatusAsync,
  fetchPostsByUserIdAsync,
  selectPostsByUserId,
} from "../../posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePost from "../../posts/components/SinglePost";
import { selectLoggedInUser } from "../../auth/authSlice";

const MyProfile = () => {
  const [showPost, setShowPost] = useState(true);

  const param = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsByUserIdAsync(param.id));
  }, [dispatch, param]);

  const posts = useSelector(selectPostsByUserId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <div
        className="bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
      bg-fixed bg-cover"
      >
        <div className="h-full w-full  flex flex-col items-center">
          <div className="h-full w-3/5 ">
            {/* cover photo */}
            <div
              className="w-full bg-cover bg-no-repeat bg-center"
              style={{
                height: 250,
                backgroundImage: "",
                backgroundColor: "#cccccc",
              }}
            >
              <img
                className=" w-full h-full"
                src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200"
                alt=""
              />
            </div>
            <div className="p-4 bg-[#6F7171]">
              <div className="relative flex w-full ">
                {/* Avatar */}
                <div className="flex flex-1">
                  <div style={{ marginTop: "-6rem" }}>
                    <div
                      style={{ height: "9rem", width: "9rem" }}
                      className="md rounded-full relative avatar"
                    >
                      <img
                        style={{ height: "9rem", width: "9rem" }}
                        className="md rounded-full relative border-4 border-gray-900"
                        src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
                        alt=""
                      />
                      <div className="absolute" />
                    </div>
                  </div>
                </div>
                {/* Follow Button */}
                <div className="flex flex-col text-right">
                  <button
                    type="button"
                    className="px-3 py-2 bg-blue-600 rounded-lg text-white outline-none shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
                  >
                    <span className="">Edit Profile</span>
                  </button>
                </div>
              </div>
              {/* Profile info */}
              <div className="space-y-1 justify-center w-full mt-3 ml-3">
                {/* User basic*/}
                <div>
                  <h2 className="text-xl leading-6 font-bold text-white">
                    USER__NAME
                  </h2>
                </div>
                {/* Description and others */}
                <div className="mt-3">
                  <p className="text-white leading-tight mb-2">
                    Software Engineer / Designer / Entrepreneur <br />
                    Visit my website to test a working <b>
                      Twitter Clone.
                    </b>{" "}
                  </p>
                  <div className="text-gray-800 flex">
                    <span className="flex mr-2">
                      <Link color="black" size={20} className="mr-1" />
                      <a
                        href="https://ricardoribeirodev.com/personal/"
                        target="#"
                        className="leading-5 ml-1 text-blue-400"
                      >
                        www.RicardoRibeiroDEV.com
                      </a>
                    </span>
                    <span className="flex mr-2">
                      <CalendarDays color="black" size={21} />
                      <span className="leading-5 ml-1">
                        Joined December, 2019
                      </span>
                    </span>
                  </div>
                </div>
                <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                  <div className="text-center pr-3">
                    <span className="font-bold text-white">520</span>
                    <span className="text-gray-700"> Following</span>
                  </div>
                  <div className="text-center px-3">
                    <span className="font-bold text-white">23,4m </span>
                    <span className="text-gray-700"> Followers</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-gray-800" />
            <div className="w-full h-full flex flex-col bg-[#6F7171] pt-2">
              {/* new post form */}
              <div className="h-full w-full flex">
                <form
                  className=" w-full flex flex-col "
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
                  <div className="flex flex-col items-center">
                    <div className="w-5/6">
                      <textarea
                        {...register("status", { required: true })}
                        name="status"
                        id="status"
                        placeholder="What's on your mind?"
                        className="block p-2.5 w-full text-sm text-black bg-gray-100 rounded-lg border border-gray-500 mt-2 mb-2 "
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-end w-5/6">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 rounded-lg text-white outline-none shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
                    >
                      Post
                    </button>
                    <button className="cursor-pointer ">
                      <Paperclip color="white" />
                    </button>
                  </div>
                </form>
              </div>
              {/* buttons for my posts and saved posts */}
              <div className="w-full h-full flex items-center justify-around mt-2 ">
                <button
                  className="transform active:scale-x-75 transition-transform mx-5 "
                  onClick={() => setShowPost(true)}
                >
                  <Image size={40} />
                </button>
                <button
                  className="transform active:scale-x-75 transition-transform mx-5 "
                  onClick={() => setShowPost(false)}
                >
                  <BookmarkCheck size={40} />
                </button>
              </div>

              {/* post section */}
              <div className="h-full w-full flex flex-col items-center">
                {/* {showPost ? <div>all posts</div> : <div>saved posts</div>} */}
                {/* //TODO: need to put saved posts functionality here */}
                {/* posts area */}
                {posts &&
                  posts.map((post) => {
                    return (
                      <>
                        <section
                          key={post.id}
                          className="w-5/6 bg-white shadow-xl m-4 border-4 border-gray-500/50 p-2 "
                        >
                          <SinglePost post={post} />
                        </section>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
