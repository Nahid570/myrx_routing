import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedNavigator = () => {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to="signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedNavigator;
