import { ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import EditProfile from "./EditProfile";

const Settings = () => {
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <>
      <div className="h-full w-full bg-slate-500 flex justify-center items-center pt-5">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-5/6 h-full">
            <button
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              onClick={() => setShowPersonalDetails(!showPersonalDetails)}
            >
              <span>Personal Details</span>
              <ChevronDown color="white" size={25} />
            </button>
            {showPersonalDetails && (
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-300">
                <EditProfile />
              </div>
            )}
            <button
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              onClick={() => setShowChangePassword(!showChangePassword)}
            >
              <span>Change Password</span>
              <ChevronDown color="white" size={25} />
            </button>
            {showChangePassword && (
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-300">
                Change Password page
              </div>
            )}
            <button className="flex items-center justify-start w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
              <LogOut />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
