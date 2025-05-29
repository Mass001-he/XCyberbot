import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";

function BaseLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default BaseLayout;
