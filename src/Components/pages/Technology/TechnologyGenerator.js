import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const TochnologyGenerator = ({ Technology }) => {
  const Location = useLocation();
  const IsBig = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="Technology">
      {IsBig ? (
        <img
          alt="Technology"
          src={process.env.PUBLIC_URL + `${Technology.images.portrait}`}
        />
      ) : (
        <img
          alt="Technology"
          src={process.env.PUBLIC_URL + `${Technology.images.landscape}`}
        />
      )}
      <div>
        <ul>
          <li
            className={
              Location.pathname === "/space-tourism/TECHNOLOGY/VEHICLE" ||
              Location.pathname === "/space-tourism/TECHNOLOGY" ||
              Location.pathname === "/space-tourism/TECHNOLOGY/"
                ? "active"
                : null
            }
          >
            <Link to="/space-tourism/TECHNOLOGY/VEHICLE">1</Link>
          </li>
          <li
            className={
              Location.pathname.includes("/SPACEPORT") ? "active" : null
            }
          >
            <Link to="/space-tourism/TECHNOLOGY/SPACEPORT">2</Link>
          </li>
          <li
            className={Location.pathname.includes("/CAPSULE") ? "active" : null}
          >
            <Link to="/space-tourism/TECHNOLOGY/CAPSULE">3</Link>
          </li>
        </ul>
        <div className="Technology-text">
          <h1>
            <span>THE TERMINOLOGY… </span>
            {Technology.name}
          </h1>
          <p>{Technology.description}</p>
        </div>
     
      </div>
    </div>
  );
};

export default TochnologyGenerator;
