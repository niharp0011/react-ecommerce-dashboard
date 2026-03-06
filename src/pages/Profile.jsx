import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { getUser, saveUser } from "../utils/sessionManager";
import { toast } from "react-toastify";


function Profile() {

  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {

    const data = getUser();

    if (data) {
      setUser(data);
    }

    setTimeout(() => {
      setLoading(false);
    }, 400);

  }, []);

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleUpdate = () => {

    saveUser(user);

    toast.success("Profile Updated");

    setEdit(false);

  };

  if (loading) return <Loader />;

  return (

    <div className="container mx-auto p-6 max-w-xl">

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          User Profile
        </h1>

        <p className="text-gray-500 mb-6">
          View user details
        </p>

        {/* NAME */}

        <div className="mb-4">

          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!edit}
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white"
          />

        </div>

        {/* EMAIL */}

        <div className="mb-4">

          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!edit}
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white"
          />

        </div>

        {/* PASSWORD */}

        <div className="mb-6">

          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            disabled={!edit}
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white"
          />

        </div>

        {/* BUTTONS */}

        {!edit ? (

          <button
            onClick={() => setEdit(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Edit
          </button>

        ) : (

          <button
            onClick={handleUpdate}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            Update
          </button>

        )}

      </div>

    </div>

  );

}

export default Profile;