import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function PublicRoute() {
  const isAuthenticated = localStorage.getItem("userId");
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
