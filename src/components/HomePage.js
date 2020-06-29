import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ArtistCard from "./ArtistCard";
import CompPage from "./CompPage";
import CompAlert from "./CompAlert";

export default function HomePage({ artistInfo, handleCompToggle, comps }) {
  return (
    <div className="homePage">
      {artistInfo[0]
        ? artistInfo.map((artist, index) => {
            return (
              <>
                <ArtistCard
                  key={index}
                  name={artist.name}
                  imageSrc={artist.images[0].url}
                  handleCompToggle={() => handleCompToggle(artist)}
                  comps={comps}
                />
              </>
            );
          })
        : null}
      {comps.length === 2 ? <CompAlert /> : null}
    </div>
  );
}
