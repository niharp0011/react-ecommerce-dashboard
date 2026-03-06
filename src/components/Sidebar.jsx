import { NavLink } from "react-router-dom";
import { FaBox, FaShoppingCart, FaUser } from "react-icons/fa";

function Sidebar() {

    return (

       <div className="w-64 bg-gray-100 dark:bg-gray-800 min-h-screen p-5 hidden md:block">

            <h2 className="text-xl font-bold mb-8 text-gray-800 dark:text-white">
                Dashboard
            </h2>

            <ul className="space-y-4">

                <li>
                    <NavLink
                        to="/products"
                        className="flex items-center gap-3 p-2 rounded hover:bg-blue-500 hover:text-white"
                    >
                        <FaBox />
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/cart"
                        className="flex items-center gap-3 p-2 rounded hover:bg-blue-500 hover:text-white"
                    >
                        <FaShoppingCart />
                        Cart
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/profile"
                        className="flex items-center gap-3 p-2 rounded hover:bg-blue-500 hover:text-white"
                    >
                        <FaUser />
                        Profile
                    </NavLink>
                </li>

            </ul>

        </div>

    )

}

export default Sidebar