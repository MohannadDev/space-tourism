import React from "react";
import { Link, useLocation } from "react-router-dom";
const DestinationGenerator = ({ Destination }) => {
  const Location = useLocation();

  return (
    <div className="Destination">
      <picture>
        <source
          srsset={process.env.PUBLIC_URL + `${Destination.images.webp}`}
          alt="destination"
        />
        <img
          src={process.env.PUBLIC_URL + `${Destination.images.png}`}
          alt="destination"
        />
      </picture>
      <div className="Destination-text">
        <ul className="Destination-Links">
          <li
            className={
              Location.pathname === "/space-tourism/DESTINATION/Moon" ||
              Location.pathname === "/space-tourism/DESTINATION" ||
              Location.pathname ===
                "/space-tourism/DESTINATION/"
                ? "active"
                : null
            }
          >
            <Link to="/space-tourism/DESTINATION/Moon">Moon</Link>
          </li>
          <li className={Location.pathname.includes("/MARS") ? "active" : null}>
            <Link to="/space-tourism/DESTINATION/MARS">MARS</Link>
          </li>
          <li
            className={
              Location.pathname.includes("DESTINATION/EUROPA") ? "active" : null
            }
          >
            <Link to="/space-tourism/DESTINATION/EUROPA">EUROPA</Link>
          </li>
          <li
            className={
              Location.pathname.includes("DESTINATION/TITAN") ? "active" : null
            }
          >
            <Link to="/space-tourism/DESTINATION/TITAN">TITAN</Link>
          </li>
        </ul>
        <h1>{Destination.name}</h1>
        <p className="destination-paragraph">{Destination.description}</p>
        <div
          className="hl"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        ></div>
        <div className="destination-info">
          <p>
            AVG. DISTANCE <br />
            <span>{Destination.distance}</span>
          </p>
          <p>
            Est. travel time <br />
            <span>{Destination.travel}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationGenerator;
