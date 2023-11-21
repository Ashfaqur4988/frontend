import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUserAsync } from "../authSlice";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-gray-900 h-screen w-screen py-6 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center text-2xl font-semibold text-white">
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
              Create a new account
            </h1>
            <form
              noValidate
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit((userData) => {
                console.log({ userData });
                dispatch(
                  createUserAsync({
                    email: userData.email,
                    name: userData.name,
                    password: userData.password,
                  })
                );
              })}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your name"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
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
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="flex items-center relative">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Confirm Password Is Required",
                      validate: (value, formValues) =>
                        value === formValues.password ||
                        "password not matching", //for matching both passwords.
                    })}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    onClick={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                    className="absolute mr-1 right-0"
                  >
                    {confirmPasswordVisible ? (
                      <EyeOff color="white" />
                    ) : (
                      <Eye color="white" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
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
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-300 ">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium  text-gray-400 hover:underline hover:text-gray-100"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
