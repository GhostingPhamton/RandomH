import React from "react";

import MainNavBar from "./MainNavBar/MainNavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Virgo.css";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <MainNavBar auth={props.auth} />
      {children}
    </>
  );
};

export default Layout;
