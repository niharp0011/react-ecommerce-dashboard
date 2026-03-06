import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createSession } from "../utils/sessionManager"
import { toast } from "react-toastify";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(true);

    const handleLogin = (e) => {

        e.preventDefault()

        const user = JSON.parse(localStorage.getItem("user"))

        if (user && user.email === email && user.password === password) {
            createSession()
            toast.success("Login successful")
            navigate("/dashboard")

        } else {
            toast.error("Invalid credentials")
        }
    }


    useEffect(() => {

        const expiry = localStorage.getItem("sessionExpiry");

        
        if (expiry && Date.now() < Number(expiry)) {

            navigate("/dashboard");

            return;

        }

        setTimeout(() => {
            setLoading(false);
        }, 400);

    }, [navigate]);



    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 400);

    }, []);

    if (loading) return <Loader />;


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition">

            <div className="max-w-6xl w-full m-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl flex flex-col lg:flex-row overflow-hidden">

                {/* LEFT IMAGE */}

                <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-50 dark:bg-gray-700 p-10">

                    <img
                        src="https://www.tailwindtap.com/assets/components/form/createaccount/login.svg"
                        className="max-h-[400px]"
                        alt="login"
                    />

                </div>

                {/* RIGHT FORM */}

                <div className="w-full lg:w-1/2 p-10">

                    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                        Sign In
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-4">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            required
                        />

                        {/* PASSWORD FIELD */}

                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input pr-10"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
                            Sign In
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50"
                        >
                            Create Account
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );
}