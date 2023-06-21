import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const SignIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { signIn, googlesignIn, logOut } = useContext(AuthContext)
    const [signInError, setSignInError] = useState('')

    const handleLogin = (data) => {
        setSignInError('')
        console.log(data);
        const email = data.email
        const password = data.password

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                reset()
            })
            .catch(err => setSignInError(err.message))
    }

    console.log(signInError.slice(22, 36));

    const handleGoogleSignIn = () => {
        googlesignIn()
            .then(res => {
                const user = res.user
                console.log(user);

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">

                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        action=""
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8"
                    >
                        <h1 className=" text-2xl font-bold text-indigo-600 sm:text-3xl">
                            Sign In
                        </h1>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    {
                                    ...register('email', {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email format",
                                        },
                                    })
                                    }
                                    type="email"
                                    className="w-full rounded-lg border-gray-600 border p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                            </div>
                            {errors.email?.message && <p className="text-red-500 my-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <input
                                    {
                                    ...register('password', {
                                        required: "Password is required",
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                            message: "Password minimum six characters, at least one letter and one number"
                                        }
                                    })
                                    }
                                    type="password"
                                    className="w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />
                                {errors.password?.message && <p className="text-red-500 my-1">{errors.password.message}</p>}
                            </div>
                        </div>
                        {signInError && <p className="text-red-500 my-1">Error:  {signInError.slice(22, 36)}</p>}
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </form>
                    <div
                        className="my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
                        OR
                    </div>
                    <button
                        onClick={handleGoogleSignIn}
                        type="submit"
                        className="block w-3/5 mb-3 mx-auto rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign In With Google
                    </button>
                    <div className="flex justify-center">
                        <p className="text-center text-sm text-gray-500">No account?</p>
                        <Link to='/signup' className="mx-3 text-indigo-600" ><span className="underline" >Sign up</span></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SignIn;