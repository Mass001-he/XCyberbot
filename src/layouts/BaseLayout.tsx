import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";
import Robot from "../components/robot";

function BaseLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Robot />
    </div>
  );
}

export default BaseLayout;
