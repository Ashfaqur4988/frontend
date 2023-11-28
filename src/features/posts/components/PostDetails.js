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
import { fetchPostByIdAsync, selectPostById } from "../postSlice";

const PostDetails = () => {
  const posts = {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 9,
    tags: ["history", "american", "crime"],
    reactions: 2,
  };

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

  //save toggle
  const [save, setSave] = useState(false);

  //toggle 3 dots menu
  const [verticalDotsMenu, setVerticalDotsMenu] = useState(false);

  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
    bg-fixed bg-cover w-full h-screen flex items-center justify-center "
    >
      {selectedPost.map((post) => {
        return (
          <section className=" w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 bg-white shadow-xl  border-4 border-gray-500/50 p-2 ">
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

            <div className="">
              <img className="w-full" src={post.photo} alt="" />
            </div>
            <div className="text-slate-700 font-bold">{post.caption}</div>

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

            {/* toggle comments */}
            {commentShow && (
              <div className="border-2 border-red-800 ">comments</div>
            )}
          </section>
        );
      })}
    </div>
  );
};
export default PostDetails;
