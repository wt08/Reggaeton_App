import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import artistPicsUrls from "../artistPicsUrls";
import "./HomePage.css";

export default function HomePage({ artistInfo, comps, setComps }) {

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
      {artistInfo[0]
        ? artistInfo.map((artist, index) => {
            return (
              <>
                <ArtistCard
                  key={index}
                  artist={artist}
                  name={artist.name}
                  imageSrc={artist.images[0].url}
                  handleCompToggle={() => handleCompToggle(artist)}
                  comps={comps}
                />
              </>
            );
          })
        : null}
    </div>
  );
}
