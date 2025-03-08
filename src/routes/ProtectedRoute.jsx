import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="flex items-center justify-center my-8">
        <span className="loading loading-infinity w-[50px]"></span>
      </div>
    );

  if (!user) return <Navigate to={"/login"} />;

  return children;
};

export default ProtectedRoute;
