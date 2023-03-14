import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
