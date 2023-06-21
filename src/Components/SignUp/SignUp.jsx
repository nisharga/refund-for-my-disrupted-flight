import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm, } from 'react-hook-form';

const SignUp = () => {

    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, googlesignIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const handleSignUp = (data) => {
        setSignUpError('')
        const email = data.email
        const password = data.password

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                reset()
            })
            .catch(err => setSignUpError(err.message))
    }

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
            <div>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg">

                        <form
                            onSubmit={handleSubmit(handleSignUp)}
                            action=""
                            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8"
                        >
                            <h1 className=" text-2xl font-bold text-indigo-600 sm:text-3xl">
                                Create New Account
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
                                                message: "Password minimum six characters, at least one letter and one number:"
                                            }
                                        })
                                        }
                                        type="password"
                                        className="w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter password"
                                    />
                                </div>
                                {errors.password?.message && <p className="text-red-500 my-1">{errors.password.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        {
                                        ...register('confirm_password', {
                                            required: "Confirming password is required",
                                            validate: (val) => {
                                                if (watch('password') !== val) {
                                                    return " Your passwords do not match"
                                                }
                                            }
                                        })
                                        }
                                        type="password"
                                        className="w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Confirm password"
                                    />
                                </div>
                                {errors.confirm_password?.message && <p className="text-red-500 my-1">{errors.confirm_password.message}</p>}
                            </div>
                            {signUpError && <p className="text-red-500 my-1">Error:  {signUpError.slice(22, 42)}</p>}
                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign Up
                            </button>
                        </form>
                        <div
                            className="my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
                            OR
                        </div>
                        <button
                            onClick={handleGoogleSignIn}
                            type="submit"
                            className="block w-3/5 mx-auto mb-3 rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign up With Google
                        </button>
                        <div className="flex justify-center">
                            <p className="text-center text-sm text-gray-500">Already have a account?</p>
                            <Link to='/signup' className="mx-3 text-indigo-600" ><span className="underline" >Sign In</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;