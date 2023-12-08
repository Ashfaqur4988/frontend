import { MoreVertical, SendHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteCommentAsync,
  fetchCommentsByPostIdAsync,
  updateCommentAsync,
} from "./commentSlice";
import { useForm } from "react-hook-form";

const Comments = ({ id, body, user, postId }) => {
  const [verticalMenu, setVerticalMenu] = useState(false);

  const [showEditComment, setShowEditComment] = useState(false);

  const handleMenu = () => {
    setVerticalMenu(!verticalMenu);
    // console.log(id);
  };
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCommentAsync(id));
    dispatch(fetchCommentsByPostIdAsync(postId));
  };

  const handleEditShow = () => {
    setShowEditComment(!showEditComment);
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {}, []);

  return (
    <div>
      <article className="p-6  text-base  bg-white border-t border-gray-200 ">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie Green"
              />
              {user.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time pubdate="" dateTime="2022-03-12" title="March 12th, 2022">
                Mar. 12, 2022
              </time>
            </p>
          </div>
          <div className="cursor-pointer relative" onClick={handleMenu}>
            <MoreVertical className="h-10" />
            {verticalMenu ? (
              <ul className="absolute top-4 left-4  ">
                <li
                  onClick={() => console.log("report")}
                  className="  rounded-tr-xl cursor-pointer bg-gray-200 text-red-900 font-bold w-16 h-8  text-center"
                >
                  report
                </li>
                <li
                  onClick={() => handleDelete(id)}
                  className="  cursor-pointer bg-gray-200 text-red-500 font-bold w-16 h-8  text-center"
                >
                  delete
                </li>
                <li
                  onClick={() => handleEditShow()}
                  className=" rounded-br-xl  rounded-bl-xl cursor-pointer bg-gray-200 text-blue-900 font-bold w-16 h-8  text-center"
                >
                  edit
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </footer>
        <p className="text-gray-800 ">{body}</p>
      </article>
      {showEditComment && (
        <form
          onSubmit={handleSubmit((comment) => {
            console.log({ comment });

            const updatedComment = {
              id: id,
              body: comment.body,
              postId: postId,
              user: user,
            };
            console.log({ updatedComment });
            dispatch(updateCommentAsync(updatedComment));
            dispatch(fetchCommentsByPostIdAsync(postId));
            reset();
            setShowEditComment(!showEditComment);
          })}
        >
          <label htmlFor="chat" className="sr-only">
            Your Comment
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 ">
            <textarea
              {...register("body", { required: true })}
              id="body"
              rows={1}
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="New comment..."
              defaultValue={""}
            />
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-slate-600 rounded-full cursor-pointer hover:bg-blue-100 "
            >
              <SendHorizontal />
              <span className="sr-only">Send Comment</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default Comments;
