import React, { useEffect } from "react";
import ArtistCard from "./ArtistCard";
import artistPicsUrls from "../artistPicsUrls";
import "./HomePage.css";

export default function HomePage({
  artistInfo,
  handleCompToggle,
  comps,
  clearComps,
}) {
  useEffect(() => {
    clearComps();
  }, []);

  return (
    <div className="homePage">
      {artistInfo[0]
        ? artistInfo.map((artist, index) => {
            return (
              <div key={artist.id}>
                <ArtistCard
                  name={artist.name}
                  imageSrc={artistPicsUrls[index].url}
                  handleCompToggle={() => handleCompToggle(artist)}
                  comps={comps}
                />
              </div>
            );
          })
        : <h1>Loading....</h1>}
    </div>
  );
}
