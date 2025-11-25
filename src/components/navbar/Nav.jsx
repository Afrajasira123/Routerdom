import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-20 bg-blue-200 text-black py-3 flex justify-around items-center ">
      <p className="text-4xl font-bold">LOGO</p>
      <div className="flex gap-10 items-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/course"}>Course</NavLink>
        <NavLink to={"/teams"}>Teams</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <button>Login /Register</button>
    </div>
  );
};

export default Nav;
