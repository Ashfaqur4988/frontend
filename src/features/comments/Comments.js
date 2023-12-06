import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCommentAsync } from "./commentSlice";

const Comments = ({ id, body, username }) => {
  const [verticalMenu, setVerticalMenu] = useState(false);

  const handleMenu = () => {
    setVerticalMenu(!verticalMenu);
    // console.log(id);
  };
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCommentAsync(id));
  };

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
              {username.name}
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
                  onClick={() => console.log("edit")}
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
    </div>
  );
};
export default Comments;
