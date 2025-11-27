import React from "react";
import Nav from "../components/navbar/Nav";
import { Outlet } from "react-router-dom";
import Foot from "../components/footer/Foot";

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <div className="bg-blue-100 h-screen">
        <Outlet />
      </div>
      <Foot />
    </>
  );
};

export default HomeLayout;
