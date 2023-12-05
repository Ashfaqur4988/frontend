import { MoreVertical } from "lucide-react";
import { useState } from "react";

const Comments = ({ id, body }) => {
  const [verticalMenu, setVerticalMenu] = useState(false);

  const handleMenu = () => {
    setVerticalMenu(!verticalMenu);
    // console.log(id);
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
              user name {id}
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
                  onClick={() => console.log("delete")}
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

          <div
            id="dropdownComment3"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Remove
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-gray-800 ">{body}</p>
      </article>
    </div>
  );
};
export default Comments;
