import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUserAsync } from "../authSlice";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
     h-screen w-screen py-6 px-4"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center text-2xl mb-2 font-semibold text-blue-950">
          <img
            src="/NexusNest.png"
            alt="logo"
            className="w-24 rounded-lg mr-4"
          />
          NEXUS NEST
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in to your account
            </h1>
            <form
              noValidate
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit((userData) => {
                console.log({ userData });
              })}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@organization.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>

                <div className="flex items-center relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Password Is Required",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gi,
                        message: `- at least 8 characters \n
                      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
                      - Can contain special characters`,
                      },
                    })}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute mr-1 right-0"
                  >
                    {passwordVisible ? (
                      <EyeOff color="white" />
                    ) : (
                      <Eye color="white" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to={""}
                  className="text-sm font-medium text-gray-400 hover:underline hover:text-gray-100 "
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              >
                Log In
              </button>
              <p className="text-sm font-light text-gray-300 ">
                Do not have an account?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium  text-gray-400 hover:underline hover:text-gray-100"
                >
                  Create One
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
