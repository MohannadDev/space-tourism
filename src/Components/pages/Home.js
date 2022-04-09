import React from "react";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="page Home">
      <div className="landing">
        <div className="home-text">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <div className="explore-container">
            <Link to="DESTINATION">EXPLORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
