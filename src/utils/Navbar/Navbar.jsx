import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logOut, user } = useContext(AuthContext);
    console.log(user);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const logout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-white">Logo</span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center">
                                <Link
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                                >
                                    Link 1
                                </Link>
                                <Link
                                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                                >
                                    Link 2
                                </Link>
                                {
                                    user ?
                                        <Link onClick={logout}
    
                                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                                        >
                                            Logout
                                        </Link>
                                        :
                                        <Link
    
                                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                                        >
                                            Login
                                        </Link>
                                }
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                                aria-expanded={isOpen}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                            >
                                Link 1
                            </Link>
                            <Link
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                            >
                                Link 2
                            </Link>
                            {
                                user ?
                                    <Link onClick={logout}

                                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                                    >
                                        Logout
                                    </Link>
                                    :
                                    <Link

                                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                                    >
                                        Login
                                    </Link>
                            }
                        </div>
                    </div>
                )}
            </nav>

        </>
    );
};

export default Navbar;