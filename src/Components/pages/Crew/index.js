import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Generator from "./CrewGenerator";
import Data from "../data.json";
const Index = () => {
  const Location = useLocation();
  return (
    <div className="page Crew-container">
      <h5 className="section-landing">
        <span>02</span> Meet your crew
      </h5>
      {Location.pathname === "/space-tourism/CREW" ||
      Location.pathname === "/space-tourism/CREW/" ? (
        <Generator Crew={Data.crew[0]} />
      ) : null}
      <Outlet />
    </div>
  );
};

export default Index;
