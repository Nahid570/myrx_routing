import { Navigate, Outlet } from "react-router-dom";
import { useLocalDB } from "../hooks/useLocalDB";

const PublicNavigator = () => {
  const IS_FIRST_TIME = useLocalDB();

  if (IS_FIRST_TIME) {
    return <Navigate to="/db-credential" replace />;
  }

  return <Outlet />;
};

export default PublicNavigator;
