import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const existingUser = JSON.parse(localStorage.getItem("user"));

        if (existingUser && existingUser.email === form.email) {

            toast.warning("User already registered");
            return;

        }

        localStorage.setItem("user", JSON.stringify(form));

        toast.success("Registration successful");

        setTimeout(() => {
            navigate("/");
        }, 1000);
    }

    useEffect(() => {

        const expiry = localStorage.getItem("sessionExpiry");

        // if user already logged in
        if (expiry && Date.now() < Number(expiry)) {

            navigate("/dashboard");
            return;

        }

        setTimeout(() => {
            setLoading(false);
        }, 400);

    }, [navigate]);

    if (loading) return <Loader />;

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition">

            <div className="max-w-6xl w-full m-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl flex flex-col lg:flex-row overflow-hidden">

                {/* LEFT IMAGE */}

                <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-50 dark:bg-gray-700 p-10">

                    <img
                        src="https://www.tailwindtap.com/assets/components/form/createaccount/login.svg"
                        className="max-h-[400px]"
                        alt="register"
                    />

                </div>

                {/* RIGHT FORM */}

                <div className="w-full lg:w-1/2 p-10">

                    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                        Create Account
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            className="input"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            className="input"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            className="input"
                            required
                        />

                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <input type="checkbox" required />
                            <span>I agree to the Terms and Privacy Policy</span>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
                            Sign Up
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50"
                        >
                            Sign In
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}