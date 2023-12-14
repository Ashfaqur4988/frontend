import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
  SmilePlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addLikeAsync,
  deleteLikeAsync,
  selectAllLikes,
} from "../../likes/likesSlice";

const SinglePost = ({ post }) => {
  const allLikes = useSelector(selectAllLikes);

  //TODO: make like persist even after refresh
  const [like, setLike] = useState(false);

  // useEffect(() => {
  //   setLike(
  //     allLikes.some(
  //       (like) => like.postId === post.postId && like.user.id === post.user.id
  //     )
  //   );
  //   console.log(like);
  // }, [allLikes, post, like]);

  //toggle comments
  const [commentShow, setCommentShow] = useState(false);

  //save toggle
  const [save, setSave] = useState(false);

  //toggle 3 dots menu
  const [verticalDotsMenu, setVerticalDotsMenu] = useState(false);

  const dispatch = useDispatch();

  const handleLike = () => {
    setLike(!like);
    let likeData = {
      postId: post.id,
      user: { id: post.userId, name: post.userName },
    };
    console.log(likeData);

    if (like) {
      console.log("delete like action ", like);
      dispatch(deleteLikeAsync(likeData));

      // setLike(false);
    } else {
      console.log("add like action ", like);
      dispatch(addLikeAsync(likeData));

      // setLike(true);
    }
  };

  return (
    <>
      <div className=" flex justify-between ">
        <Link to={"user-profile"}>
          <div className="flex items-center">
            <SmilePlus color="red" className="h-10 mr-3" />
            <p className="text-slate-900 font-bold hover:italic cursor-pointer">
              {post.userName} {post.id}
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
      <Link to={`/post-details/${post.id}`}>
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
      </Link>

      <div className="flex justify-between">
        <div className="flex">
          <button onClick={handleLike} className="">
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
      {commentShow && <div className="border-2 border-red-800 ">comments</div>}
    </>
  );
};
export default SinglePost;
