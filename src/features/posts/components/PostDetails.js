import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
  SmilePlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  deletePostAsync,
  fetchPostByIdAsync,
  selectPostById,
} from "../postSlice";
import {
  fetchCommentsByPostIdAsync,
  selectCommentsByPostId,
} from "../../comments/commentSlice";
import Comments from "../../comments/Comments";

const PostDetails = () => {
  const dispatch = useDispatch();
  const selectedPost = useSelector(selectPostById);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchPostByIdAsync(params.id));
  }, [dispatch, params.id]);

  //like and dislike
  const [like, setLike] = useState(false);

  //toggle comments
  const [commentShow, setCommentShow] = useState(false);

  useEffect(() => {
    if (commentShow) {
      dispatch(fetchCommentsByPostIdAsync(params.id));
    }
  }, [dispatch, commentShow, params.id]);

  const comments = useSelector(selectCommentsByPostId);

  //save toggle
  const [save, setSave] = useState(false);

  //toggle 3 dots menu
  const [verticalDotsMenu, setVerticalDotsMenu] = useState(false);

  const handleDelete = (post) => {
    // console.log(post.id);
    dispatch(deletePostAsync(post.id));
  };

  return (
    <div
      className="w-full  bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
    bg-fixed bg-cover"
    >
      <div className="flex h-full w-full items-center justify-center py-4">
        {selectedPost &&
          selectedPost.map((post) => {
            return (
              <div className="w-full h-full flex flex-col items-center">
                <div className=" w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 flex justify-between mb-3">
                  <button className="text-slate-700 bg-blue-200 hover:text-white border border-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                    Edit Post
                  </button>
                  <button
                    type="button"
                    className="text-slate-700 bg-red-200 hover:text-white border border-slate-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    onClick={() => handleDelete(post)}
                  >
                    Delete Post
                  </button>
                </div>
                <section className=" w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 bg-white shadow-xl  border-4 border-gray-500/50 p-2">
                  <div className=" flex justify-between items-center">
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

                  <div className="text-slate-700 font-bold">
                    {post.photo ? (
                      <img className="w-full" src={post.photo} alt="" />
                    ) : (
                      post.status
                    )}
                  </div>
                  <div className="text-slate-700 font-bold">
                    {post.caption && post.caption}
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
                </section>
                {/* toggle comments */}
                {commentShow && (
                  <div className="w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 flex flex-col justify-between ">
                    <div className="mb-2">
                      <form>
                        <label htmlFor="chat" className="sr-only">
                          Your message
                        </label>
                        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 ">
                          <textarea
                            id="comments"
                            rows={1}
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Your comment..."
                            defaultValue={""}
                          />
                          <button
                            type="submit"
                            className="inline-flex justify-center p-2 text-slate-600 rounded-full cursor-pointer hover:bg-blue-100 "
                          >
                            <svg
                              className="w-5 h-5 rotate-90 rtl:-rotate-90"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 20"
                            >
                              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                            </svg>
                            <span className="sr-only">Send message</span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="">
                      {comments &&
                        comments.map((comment) => {
                          return (
                            <Comments id={comment.id} body={comment.body} />
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default PostDetails;
