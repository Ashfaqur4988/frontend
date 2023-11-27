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
          <div className="flex flex-col justify-center w-full border-4 border-gray-100 ">
            <div className="flex justify-evenly w-10/12  absolute bottom-1/3">
              <div className="flex justify-between border-2 border-red-600 ">
                <div className="flex flex-col justify-center items-center border-2 border-red-600 mr-4 ">
                  <span>22</span>
                  <span>friends</span>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-red-600">
                  <div>22</div>
                  <div>Posts</div>
                </div>
              </div>
              <div className=" border-gray-500 ">
                <img
                  src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-64 h-60 rounded-full  border-3"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <button className="bg-blue-900 active:bg-blue-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                  Connect
                </button>
              </div>
              <div>posts</div>
            </div>
          </div>
          <div className="w-full h-3/5 bg-slate-400 sticky bottom-0 left-0 right-0 -z-10">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
