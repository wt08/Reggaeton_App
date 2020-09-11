import React, { useState } from "react";
import Footer from "./Footer";
import "./FollowerCompare.css";
import CountUp from "react-countup";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FollowerCompare = ({ comps, setComps }) => {
  const [isEffect, setIsEffect] = useState(false);

  return (
    <div className="followerCompare">
      <div className="headingFollower">
        <Nav setComps={setComps} />
        <Link to="/popularitycompare">
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`arrowRightFollower ${isEffect ? "bounce" : null}`}
          />
        </Link>
      </div>
      <h1>Followers</h1>
      <div className="followerMain">
        {comps.map((artist) => {
          return (
            <div className="followerCard">
              <CountUp
                end={artist.followers.total}
                duration={2}
                separator={","}
                className="countup"
                onEnd={() => setIsEffect(true)}
              />
              <h4>{artist.name}</h4>
              <img src={artist.images[0].url} alt={artist.name} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default FollowerCompare;
