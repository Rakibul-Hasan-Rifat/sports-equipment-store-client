import { Link, NavLink } from "react-router";

const Footer = () => {
  // 181818    1f1f1f
  return (
    <footer className="text-white">
      <div className="grid grid-cols-3 justify-between p-5 bg-[#181818]">
        <div>
          <Link to={"/"}>
            <h4 className="text-xl font-semibold">EquiStore</h4>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center pl-5 border-l border-l-gray-400">
          <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
          <ul className="flex flex-col items-center justify-between gap-3">
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
        </div>
        <div className="pl-5 border-l border-l-gray-400">
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="mb-3">
            <small>You can be always up to date with our company news!</small>
          </p>
          <div className="flex rounded-4xl overflow-hidden">
            <input type="text" className="input" />
            <button className="btn border-0 bg-[#a1a1a1] text-white">OK</button>
          </div>
        </div>
      </div>
      <div className="p-5 bg-[#1f1f1f] text-center text-white">
        <p>Copyright &copy; {(new Date()).getFullYear()} – EquiStore – All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
