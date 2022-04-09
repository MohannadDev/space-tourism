import React from "react";
import { Link, useLocation } from "react-router-dom";
const CrewGenerator = ({ Crew }) => {
  const Location = useLocation();
  return (
    <div className="Crew">
      
      <picture>
        <source
          srsset={process.env.PUBLIC_URL + `${Crew.images.webp}`}
          alt="Crew"
        />
        <img src={process.env.PUBLIC_URL + `${Crew.images.png}`} alt="Crew" />
      </picture>
      <div className="Crew-text">
        <ul className="Crew-Links">
          <li
            className={
              Location.pathname === "/space-tourism/CREW/DOUGLAS" ||
              Location.pathname === "/space-tourism/CREW" ||
              Location.pathname === "/space-tourism/CREW/"
                ? "active"
                : null
            }
          >
            <Link to="/space-tourism/CREW/DOUGLAS"></Link>
          </li>
          <li className={Location.pathname.includes("/MARK") ? "active" : null}>
            <Link to="/space-tourism/CREW/MARK"></Link>
          </li>
          <li
            className={
              Location.pathname.includes("CREW/VICTOR") ? "active" : null
            }
          >
            <Link to="/space-tourism/CREW/VICTOR"></Link>
          </li>
          <li
            className={
              Location.pathname.includes("CREW/ANOUSHEH") ? "active" : null
            }
          >
            <Link to="/space-tourism/CREW/ANOUSHEH"></Link>
          </li>
        </ul>
        <div className="Crew-info">
          <p className="Crew-role">{Crew.role}</p>
          <h1>{Crew.name}</h1>
          <p className="Crew-bio">{Crew.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default CrewGenerator;
