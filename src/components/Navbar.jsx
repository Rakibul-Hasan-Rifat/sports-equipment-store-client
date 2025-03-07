import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("User logged out successfully.");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Toaster />
      <nav className="flex items-center justify-between py-3">
        <Link to={"/"}>
          <h4 className="text-xl font-semibold">EquiStore</h4>
        </Link>
        <ul className="flex items-center justify-between gap-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `p-1 ${isActive ? "border-b-3 font-semibold" : "border-b-0"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"equipments"}
              className={({ isActive }) =>
                `p-1 ${isActive ? "border-b-3 font-semibold" : "border-b-0"}`
              }
            >
              All Equipments
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"myEquipments"}
              className={({ isActive }) =>
                `p-1 ${isActive ? "border-b-3 font-semibold" : "border-b-0"}`
              }
            >
              My Equipments
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"addEquipment"}
              className={({ isActive }) =>
                `p-1 ${isActive ? "border-b-3 font-semibold" : "border-b-0"}`
              }
            >
              Add Equipment
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-2">
          {user ? (
            <div className="flex gap-2 items-center">
              <img
                src={user?.photoURL}
                alt=""
                data-tooltip-id="user_name"
                data-tooltip-content={user?.displayName}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <Tooltip id="user_name"/>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn">Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn">Register</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
