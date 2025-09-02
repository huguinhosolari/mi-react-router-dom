import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RequireAuth({ children }) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user)  {
        // redireccionar al login
        return <Navigate to="/login" replace state={{ from: location }} />;
    }
    return children;
}