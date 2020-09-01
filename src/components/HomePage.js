import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import artistPicsUrls from "../artistPicsUrls";
import "./HomePage.css";

export default function HomePage({ artistInfo, comps, setComps, routerProps }) {
  const handleCompToggle = (artist) => {
    const compsCopy = [...comps];
    const artistIndex = compsCopy.indexOf(artist);
    artistIndex > -1
      ? compsCopy.splice(artistIndex, 1)
      : compsCopy.push(artist);
    setComps(compsCopy);
  };

  return (
    <div className="homePage">
      {comps.length === 2 ? routerProps.history.push('/comppage') : null}
      {artistInfo ? (
        artistInfo.map((artist, index) => {
          return (
            <div key={artist.id}>
              <ArtistCard
                artist={artist}
                name={artist.name}
                imageSrc={artist.images[0].url}
                handleCompToggle={() => handleCompToggle(artist)}
                comps={comps}
              />
            </div>
          );
        })
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}
