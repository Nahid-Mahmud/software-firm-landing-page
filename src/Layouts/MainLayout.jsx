import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
