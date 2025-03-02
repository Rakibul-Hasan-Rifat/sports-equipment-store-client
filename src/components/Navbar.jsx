import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
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
          ""
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
  );
};

export default Navbar;
