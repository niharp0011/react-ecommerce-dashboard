import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {

  return (

    <div className="w-full max-w-md relative">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <FaSearch className="absolute left-3 top-3 text-gray-400" />

    </div>

  );

}

export default SearchBar;