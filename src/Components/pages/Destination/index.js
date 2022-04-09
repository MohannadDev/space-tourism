import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Generator from "./DestinationGenerator";
import Data from "../data.json";
const Index = () => {
  const Location = useLocation();
  return (
    <div className="page Destinations">
      <h5 className="section-landing">
        <span>01</span> Pick your destination
      </h5>
      {Location.pathname === "/space-tourism/DESTINATION" ||
      Location.pathname === "/space-tourism/DESTINATION/" ? (
        <Generator Destination={Data.destinations[0]} />
      ) : null}
      <Outlet />
    </div>
  );
};

export default Index;
