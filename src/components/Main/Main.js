import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
