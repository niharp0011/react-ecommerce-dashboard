import { useEffect, useState } from "react";
import { getCategories } from "../services/productService";
import { FaLayerGroup } from "react-icons/fa";

function CategorySidebar({ setCategory }) {

    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState("all");

    useEffect(() => {

        const fetchCategories = async () => {

            const data = await getCategories();
            setCategories(data);

        };

        fetchCategories();

    }, []);

    const handleCategory = (cat) => {
        setActive(cat);
        setCategory(cat);
    };

    return (

        <div className="w-full md:w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-md">

            {/* Title */}

            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-white mb-5">

                <FaLayerGroup className="text-blue-500" />
                Categories

            </h2>

            {/* Category List */}

            <ul className="space-y-2">

                {/* All */}

                <li
                    onClick={() => handleCategory("all")} className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition 
                    ${active === "all"
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300" }`} >
                    All Products
                </li>

                {categories.map((cat) => (

                    <li
                        key={cat}
                        onClick={() => handleCategory(cat)}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer capitalize transition
                            ${active === cat
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                            }`} >
                        {cat}
                    </li>

                ))}

            </ul>

        </div>

    );

}

export default CategorySidebar;