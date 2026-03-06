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

      // show warning at 30 seconds
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

    <div className="fixed bottom-4 right-4 bg-black text-white px-5 py-4 rounded-xl shadow-lg text-center w-32">

      <p className="text-xs text-gray-300">
        Session Time
      </p>

      <p className="text-lg font-bold">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>

    </div>

  );

}

export default SessionTimer;