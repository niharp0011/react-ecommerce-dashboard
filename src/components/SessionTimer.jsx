import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/sessionManager";
import { toast } from "react-toastify";

function SessionTimer() {

    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(0);
    const [warningShown, setWarningShown] = useState(false);

    useEffect(() => {

        const updateTimer = () => {

            const expiry = localStorage.getItem("sessionExpiry");

            if (!expiry) return;

            const remaining = Math.floor((Number(expiry) - Date.now()) / 1000);

            if (remaining === 30 && !warningShown) {
                toast.warning("Session expiring in 30 seconds ⚠️");
                setWarningShown(true);
            }

            if (remaining <= 0) {
                toast.error("Session expired");
                logoutUser();
                navigate("/");
            } else {
                setTimeLeft(remaining);
            }

        };

        updateTimer();

        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);

    }, [navigate, warningShown]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (

        <div className=" fixed  top-[10%] left-1/2 -translate-x-1/2 md:top-[11%] lg:top-auto lg:left-auto lg:translate-x-0 lg:bottom-5 lg:right-5 flex items-center gap-2 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg shadow-lg text-xs md:text-sm w-auto z-50">

            <span className="text-gray-300 whitespace-nowrap">
                Session
            </span>

            <span className="font-semibold">
                {minutes}:{seconds.toString().padStart(2, "0")}
            </span>

        </div>

    );

}

export default SessionTimer;