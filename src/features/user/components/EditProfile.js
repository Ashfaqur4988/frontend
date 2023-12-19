import { useForm } from "react-hook-form";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div>
      <div className="bg-white  rounded-lg shadow relative">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Edit Your Personal Details</h3>
        </div>
        <div className="p-6 space-y-6">
          <form
            onSubmit={handleSubmit((post) => {
              console.log({ post });
            })}
          >
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="full-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="full name"
                  {...register("full-name", { required: true })}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="links"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Links to other handles
                </label>
                <input
                  type="text"
                  name="links"
                  id="links"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="abc@abc..."
                  {...register("links", { required: true })}
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="bio"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Bio..."
                  defaultValue={""}
                  {...register("bio", { required: true })}
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="####..."
                  {...register("phone", { required: true })}
                />
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  {...register("gender", { required: true })}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-span-6 grid grid-cols-6 gap-6">
                <h2 className="text-md font-medium text-gray-900 mb-2 col-span-6">
                  {" "}
                  Address:
                </h2>
                <div className="col-span-3 sm:col-span-3">
                  <label
                    htmlFor="street"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="street..."
                    {...register("street", { required: true })}
                  />
                </div>
                <div className="col-span-3 sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="city..."
                    {...register("city", { required: true })}
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="state..."
                    {...register("state", { required: true })}
                  />
                </div>
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="country..."
                    {...register("country", { required: true })}
                  />
                </div>
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="pin"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Pin Code
                  </label>
                  <input
                    type="number"
                    name="pin"
                    id="pin"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="####..."
                    {...register("pin", { required: true })}
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
