import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, setUser } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const navigate = useNavigate();

    const handleLogout = ()=>{
       localStorage.removeItem("token");
       localStorage.removeItem("user");
       setUser(null);
       toast.success("Logout Successfully");
       navigate("/login");

    }

    return (
        <nav className="bg-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Brand */}
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">
                        DevOrbit
                    </span>
                </div>

                {/* Hamburger button (mobile) */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
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

                {/* Menu (desktop) */}
                <div className="hidden sm:flex sm:items-center sm:space-x-6">
                    <a href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </a>
                    
                    <a href="/products" className="text-gray-700 hover:text-blue-600">
                        Product
                    </a>
                    
                    {!user ? (
                        <Link
                            to="/login"
                            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                            Login
                        </Link>
                    ) : (
                        <div className="relative">
                            {/* Profile Icon */}
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center space-x-2 focus:outline-none"
                            >
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                                    {user.name[0]}
                                </div>
                                <span>{user.name}</span>
                            </button>

                            {/* Dropdown */}
                            <div
                                className={`absolute right-0 mt-4 w-36 bg-white text-black rounded shadow-lg ${
                                    dropdownOpen ? "block" : "hidden"
                                }`}
                            >
                                <button
                                    onClick={() => navigate("/profile")}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                >
                                    Profile
                                </button>
                                <button
                                   onClick = {handleLogout}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="space-y-2 px-4 pb-4">
                        <a
                            href="#"
                            className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Home
                        </a>
                        
                        <a
                            href="/products"
                            className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Product
                        </a>
                        
                        <button className="w-full rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
