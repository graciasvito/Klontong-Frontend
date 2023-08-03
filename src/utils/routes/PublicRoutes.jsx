import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAuthenticated = localStorage.getItem("id");
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
