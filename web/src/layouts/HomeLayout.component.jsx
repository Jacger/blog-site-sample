import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Header from "../components/layouts/header/Header.component";
import Footer from "../components/layouts/footer/Footer.component";

function HomeLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default HomeLayout;
