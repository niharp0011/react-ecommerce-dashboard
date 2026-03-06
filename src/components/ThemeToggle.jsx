import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {

    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [dark]);

  return (

    <button
      onClick={() => setDark(!dark)}
      className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition"
    >

      {/* Switch Circle */}
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition ${
          dark ? "translate-x-8" : "translate-x-0"
        }`}
      />

      {/* Icons */}
      <div className="flex justify-between w-full px-1 text-yellow-400 text-sm">

        <FaSun />

        <FaMoon className="text-gray-200" />

      </div>

    </button>

  );

}

export default ThemeToggle;