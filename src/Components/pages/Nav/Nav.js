import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import Logo from "../assets/shared/logo.svg";
import { useMediaQuery } from "react-responsive";
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [hidedTimes, increesHidedTimes] = useState(0);

  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 768px)",
  });
  const toggleHundler = () => {
    setOpen(!isOpen);
    if (isOpen) {
      increesHidedTimes(hidedTimes + 1);
      if (hidedTimes > 0) {
        document.getElementsByClassName("Links")[0].classList.add("hideLinks");
      }
    }
  };
  let linksClass;
  if (isOpen) {
    linksClass = "Links showLinks";
  } else if (hidedTimes > 0) {
    linksClass = "Links hideLinks";
  } else {
    linksClass = "Links";
  }

  if (isOpen) {
    // if (document.querySelector(".page")) {
    const CheckPage = setInterval(() => {
      if (document.querySelector(".page")) {
        document.querySelector(".page").onclick = () => {
          if (isOpen) {
            toggleHundler();
            console.log(12);
          }
        };
        clearInterval(CheckPage);
      }
    }, 100);

    // document.querySelector("#root").lastChild.onclick = () => {
    //   setOpen(!isOpen);
    // } else {
    // setTimeout(() => {
    //   document.querySelector(".page").onclick = () => {
    //     if (isOpen) {
    //       toggleHundler();
    //       console.log(13,isOpen)
    //     }
    //   };
    // }, 1000);
    // }
  }
  if (isOpen) {
    linksClass = "Links showLinks";
  } else if (hidedTimes > 0) {
    linksClass = "Links hideLinks";
  }
  const location = useLocation();
  return (
    <div className="Nav">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Hamburger z-20 sm:hidden">
        <Hamburger
          toggled={isOpen}
          color="#D0D6F9"
          size={20}
          toggle={toggleHundler}
        />
      </div>

      <div className={linksClass}>
        <ul>
          <li
            className={location.pathname === "/space-tourism" ? "active" : null}
          >
            <Link to="/space-tourism">
              {!isTablet && "00"}
              <span>HOME</span>
            </Link>
          </li>
          <li
            className={
              location.pathname.includes("DESTINATION") ? "active" : null
            }
          >
            <Link to="space-tourism/DESTINATION">
              {!isTablet && "01"}
              <span>DESTINATION</span>
            </Link>
          </li>
          <li className={location.pathname.includes("CREW") ? "active" : null}>
            <Link to="space-tourism/CREW">
              {!isTablet && "02"}
              <span>CREW</span>
            </Link>
          </li>
          <li
            className={
              location.pathname.includes("TECHNOLOGY") ? "active" : null
            }
          >
            <Link to="space-tourism/TECHNOLOGY">
              {!isTablet && "03"}
              <span>TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
