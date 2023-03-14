import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
