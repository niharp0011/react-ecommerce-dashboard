import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/sessionManager";

function SessionTimer() {

  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {

    const updateTimer = () => {

      const expiry = localStorage.getItem("sessionExpiry");

      if (!expiry) {

        logoutUser();
        navigate("/", { replace: true });
        return;

      }

      const remaining = Math.floor((Number(expiry) - Date.now()) / 1000);

      if (remaining <= 0) {

        setTimeLeft(0);

        logoutUser();

        navigate("/", { replace: true });

      } else {

        setTimeLeft(remaining);

      }

    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);

  }, [navigate]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (

    <div className="fixed bottom-5 right-5 bg-black text-white px-6 py-4 rounded-xl shadow-lg w-36 text-center">

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