import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AdminLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
