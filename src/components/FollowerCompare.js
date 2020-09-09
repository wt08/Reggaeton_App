import React from "react";
import Footer from "./Footer";
import './FollowerCompare.css'

const FollowerCompare = ({ comps }) => {
  return (
    <div>
      <div className="followersMain">
        {comps.map((artist) => {
          return (
            <div className="followersCard">
              <h1>{artist.name}</h1>
              <img src={artist.images[0].url} alt={artist.name} />
              <p>Followers: {artist.followers.total.toLocaleString("en")}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default FollowerCompare;
