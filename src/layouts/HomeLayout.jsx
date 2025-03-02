import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default HomeLayout;
