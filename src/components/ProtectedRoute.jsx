import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const expiry = localStorage.getItem("sessionExpiry");

  if (!expiry || Date.now() > Number(expiry)) {
    return <Navigate to="/" replace />;
  }

  return children;

}

export default ProtectedRoute;