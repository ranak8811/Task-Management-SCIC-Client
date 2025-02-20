import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;
