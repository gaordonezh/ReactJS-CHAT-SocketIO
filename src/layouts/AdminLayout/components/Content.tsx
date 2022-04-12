import ScrollBar from "react-perfect-scrollbar";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <ScrollBar style={{ width: "100%" }} component="main">
      <Outlet />
    </ScrollBar>
  );
};

export default Content;
