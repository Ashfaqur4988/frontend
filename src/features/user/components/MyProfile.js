const MyProfile = () => {
  return (
    <div>
      <div className="">
        {/* background div   */}
        <div className="h-screen w-full flex flex-col items-center">
          <div className="w-full h-2/5 sticky top-o right-0 left-0">
            <img
              src="https://images.unsplash.com/photo-1672747910229-fc0563941503?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full"
            />
          </div>
          {/* content div */}
          {/* absolute bottom-1/3 */}
          <div className="absolute bottom-1/3 flex flex-col items-center w-full ">
            <div className="flex flex-col w-10/12 justify-center items-center ">
              <div className="flex justify-between items-center w-full ">
                <div className=" w-1/3 border-gray-500 ">
                  <img
                    src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-64 h-60 rounded-full  border-3"
                  />
                </div>
                <div className="w-1/3 flex justify-evenly items-center ">
                  <div className=" flex flex-col items-center  ">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blue-800 m-1">
                      22
                    </span>
                    <span className="text-xl font-bold block uppercase tracking-wide text-blue-800 m-1">
                      friends
                    </span>
                  </div>
                  <div className="  flex flex-col items-center ">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blue-800 m-1">
                      22
                    </span>
                    <span className="text-xl font-bold block uppercase tracking-wide text-blue-800 m-1">
                      Posts
                    </span>
                  </div>
                </div>

                <div className=" w-1/3 flex  justify-center items-center ">
                  <button className="bg-blue-900 active:bg-blue-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                    Edit Profile
                  </button>
                  <button className="bg-blue-900 active:bg-blue-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                    Connect
                  </button>
                </div>
              </div>
              <div className="flex text-white bg-red-950 w-full justify-center">
                Post
              </div>
            </div>
          </div>
          <div className="w-full h-3/5 bg-slate-200 "> </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
