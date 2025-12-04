import React from "react";
import Nav from "../components/navbar/Nav";
import Controlled from "../components/teams/Controlled";
import Controlled2 from "../components/teams/Controlled2";
import Formdata from "../components/teams/Formdata";
import NewClean from "../components/teams/NewClean";
import Cleanup from "../components/teams/Cleanup";
import Hookref from "../components/teams/Hookref";
import { UserContext } from "../UserContext";

const Teams = () => {
  return (
    <div className="bg-blue-100 h-screen">
      {/* <Controlled /> */}
      {/* <Controlled2 /> */}
      {/* <Formdata /> */}
      {/* <Cleanup /> */}

      <Hookref />
    </div>
  );
};

export default Teams;
