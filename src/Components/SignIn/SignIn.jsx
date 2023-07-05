import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { GrFacebook } from "react-icons/gr";
import { BsGoogle } from "react-icons/bs";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn, googlesignIn, logOut } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (data) => {
    setSignInError("");
    console.log(data);
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        reset();
      })
      .catch((err) => setSignInError(err.message));
  };

  console.log(signInError.slice(22, 36));

  const handleGoogleSignIn = () => {
    googlesignIn()
      .then((res) => {
        // const user = res.user;
        // console.log(user);
        // navigate('/');

        
  
        // Send user data to the backend
        
        const user = res.user;
        const { displayName, email, photoURL } = user;
        fetch('http://localhost:5000/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: displayName, email, photoUrl: photoURL }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Handle the response from the backend if needed
            navigate('/');
          })
          .catch((error) => {
            console.error(error);
          });
          
        // backendsend code finished
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="block items-center mx-10 ">
      <div className="p-10 block lg:w-8/12 lg:mx-auto rounded-md mt-10 bg-[#e8eef1]">
        <div className="flex items-center justify-between text-lg font-semibold text-[#0d3073]">
          <p>Login</p>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
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
            className="w-full my-5 py-2 text-white rounded-md bg-blue-500  hover:bg-blue-400 duration-300"
          >
            {loading ? "loading.." : "Login"}
          </button>
        </form>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-400 w-full h-[1px]"></div>
          <p>OR</p>
          <div className="bg-gray-400  w-full h-[1px]"></div>
        </div>
        <div className="flex justify-center text-white gap-5">
          <button className="bg-blue-500 flex justify-center items-center gap-2 align-middle  hover:bg-blue-400 duration-300 py-2 w-1/2 rounded-md">
            <p><GrFacebook></GrFacebook> </p><p>Facebook{" "}</p>
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="bg-red-500  hover:bg-red-400 duration-300 flex justify-center items-center gap-2 py-2 w-1/2 rounded-md "
          >
            <p><BsGoogle></BsGoogle></p> <p>Google{" "}</p>
          </button>
        </div>
        <p className="mt-10 text-center">
          Don’t have an account?
          <Link to="/register">
            <span className="text-[#0d73ff] cursor-pointer">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
