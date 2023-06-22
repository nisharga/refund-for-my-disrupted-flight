import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, googlesignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = (data) => {
    setSignUpError("");
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        reset();
      })
      .catch((err) => setSignUpError(err.message));
  };

  const handleGoogleSignIn = () => {
    googlesignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="block items-center mx-10 ">
      <div className="p-10 block lg:w-8/12 lg:mx-auto rounded-md my-10 bg-[#e8eef1]">
        <div className="flex items-center justify-between text-lg font-semibold text-[#0d3073] ">
          <p className="text-xl">Register</p>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <input
            type="text"
            name="name"
            className="w-full border mt-5  border-gray-400 p-2 rounded-md"
            placeholder="Enter Name"
            id=""
            {...register("name", {
              required: "This is requerd fild",
            })}
          />
          {errors.name && (
            <p className="text-sm mt-2 text-red-700">{errors.name.message}</p>
          )}
          <input
            type="email"
            name="email"
            className="w-full border my-5  border-gray-400 p-2 rounded-md"
            placeholder="Enter Email"
            id=""
            {...register("email", {
              required: "This is requerd fild",
            })}
          />
          {errors.email && (
            <p className="text-sm mt-2 text-red-700">{errors.email.message}</p>
          )}
          <input
            type="password"
            name="password"
            className="w-full border border-gray-400 p-2 rounded-md"
            placeholder="Enter Password"
            id=""
            {...register("password", {
              required: "This is requerd fild",
            })}
          />
          <button
            type="submit"
            className="w-full my-5 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-400 duration-300"
          >
            {loading ? "loading.." : "Register"}
          </button>
        </form>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-400 w-full h-[1px]"></div>
          <p>OR</p>
          <div className="bg-gray-400  w-full h-[1px]"></div>
        </div>
        <div className="flex justify-center text-white gap-5">
          <button className="bg-blue-500  hover:bg-blue-400 duration-300 py-2 w-1/2 rounded-md">
            Facebook{" "}
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="bg-red-500  hover:bg-red-400 duration-300 py-2 w-1/2 rounded-md "
          >
            Google{" "}
          </button>
        </div>
        <p className="mt-10 text-center">
          Don’t have an account?
          <Link to="/login">
            <span className="text-[#0d73ff] cursor-pointer">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;