import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../Assets/logo.png';
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logOut, user } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const logout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    const content = <>
        <Link to="/"
            className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
            Home
        </Link>
        <Link to="/policies"
            className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
            Airlines Policies
        </Link>
        <Link to="/letter_history"
            className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
            Claim Letter History
        </Link>
        <Link
            className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
            to='/feedback_contact'
        >
            Feedback & Contact
        </Link>
        
        {
            user ?
                <Link onClick={logout}

                    className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                    Logout
                </Link>
                :
                <Link

                    className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                    Login
                </Link>
        }


    </>
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between lg:justify-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex gap-1 items-center">
                                <img className='h-5 w-5 rounded-full' src={logo} alt="" />
                                <span className="text-white">Refund For My Disrupted Flight</span>
                            </div>
                        </div>
                        {/* <div className="hidden md:block">
                            <div className="ml-4 flex items-center">
                                {content}
                            </div>
                        </div> */}
                        <div className="-mr-2 flex lg:hidden">
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
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col divide-y-2">
                            {content}
                        </div>
                    </div>
                )}
            </nav>

        </>
    );
};

export default Navbar;