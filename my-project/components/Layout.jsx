import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
