import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

// Helper function to validate the token
function isTokenValid(token) {
  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000; // convert milliseconds to seconds
    return decoded.exp > now; // Token is valid if expiration is in the future
  } catch (error) {
    return false;
  }
}

function ProtectRoute({ children }) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && isTokenValid(token)) {
      const decoded = jwtDecode(token);
      const expiresIn = decoded.exp * 1000 - Date.now(); // milliseconds remaining

      const timeout = setTimeout(() => {
        alert("Session expired. Please log in again.");
        localStorage.clear();
        window.location.href = "/login"; // fallback for session expiry
      }, expiresIn);

      return () => clearTimeout(timeout);
    }
  }, [token]);

  if (!token || !isTokenValid(token)) {
    localStorage.clear();
    alert("Session timed out. Please log in again.");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectRoute;
