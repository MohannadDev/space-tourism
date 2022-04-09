import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Generator from "./TechnologyGenerator";
import Data from "../data.json";
const Index = () => {
  const Location = useLocation();
  return (
    <div className="page Technologies">
      <h5 className="section-landing">
        <span>03</span> SPACE LAUNCE 101
      </h5>
      {Location.pathname === "/space-tourism/TECHNOLOGY" ||
      Location.pathname === "/space-tourism/TECHNOLOGY/" ? (
        <Generator Technology={Data.technology[0]} />
      ) : null}
      <Outlet />
    </div>
  );
};

export default Index;
