import React from "react";
import Footer from "./Footer";
import "./FollowerCompare.css";
import CountUp from "react-countup";
import Nav from "./Nav";

const FollowerCompare = ({ comps }) => {
  return (
    <div className="followerCompare">
      <Nav />
      <h1>Followers:</h1>
      <div className="followersMain">
        {comps.map((artist) => {
          return (
            <div className="followersCard">
              <CountUp
                end={artist.followers.total}
                duration={2}
                separator={","}
                className="countup"
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
