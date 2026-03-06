import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaHome } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { logoutUser } from "../utils/sessionManager";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const activeClass =
        "text-blue-600 dark:text-blue-400 font-semibold";

    const normalClass =
        "text-gray-700 dark:text-gray-200 hover:text-blue-500 transition";

    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        toast.info("Logged out successfully");
        navigate("/", { replace: true });
    };

    return (

        <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">

            <div className="container flex items-center justify-between py-3">

                {/* Logo */}

                <NavLink
                    to="/dashboard"
                    className="text-2xl font-bold text-blue-600 hover:scale-105 transition"
                >
                    MyStore
                </NavLink>

                {/* Desktop Menu */}

                <div className="hidden md:flex items-center gap-6 font-medium">

                    {/* Home */}

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? activeClass : normalClass
                        }
                    >
                        <div className="flex items-center gap-2">
                            <FaHome />
                            Home
                        </div>
                    </NavLink>

                    {/* Products */}

                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? activeClass : normalClass
                        }
                    >
                        Products
                    </NavLink>

                    {/* Cart */}

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive
                                ? `${activeClass} flex items-center gap-2`
                                : `${normalClass} flex items-center gap-2`
                        }
                    >
                        <FaShoppingCart />
                        Cart
                    </NavLink>

                    {/* Profile */}

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? activeClass : normalClass
                        }
                    >
                        Profile
                    </NavLink>

                    <ThemeToggle />

                    {/* Logout */}

                    <button
                        onClick={handleLogout}
                        className="px-4 py-1.5 border border-red-500 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition"
                    >
                        Logout
                    </button>

                </div>

                {/* Mobile Menu Button */}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 dark:text-white text-xl"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Menu */}

            {menuOpen && (

                <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">

                    <div className="flex flex-col p-5 gap-4 font-medium">

                        <NavLink
                            to="/dashboard"
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? activeClass : normalClass
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? activeClass : normalClass
                            }
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/cart"
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeClass} flex items-center gap-2`
                                    : `${normalClass} flex items-center gap-2`
                            }
                        >
                            <FaShoppingCart />
                            Cart
                        </NavLink>

                        <NavLink
                            to="/profile"
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? activeClass : normalClass
                            }
                        >
                            Profile
                        </NavLink>

                        <ThemeToggle />

                        <NavLink
                            to="/logout"
                            onClick={() => setMenuOpen(false)}
                            className="w-fit px-4 py-1.5 border border-red-500 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition"
                        >
                            Logout
                        </NavLink>

                    </div>

                </div>

            )}

        </nav>

    );

}

export default Navbar;