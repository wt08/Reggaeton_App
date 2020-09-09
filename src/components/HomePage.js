import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import artistPicsUrls from "../artistPicsUrls";
import "./HomePage.css";
import Nav from "./Nav";
import spotifyLogo from "../spotifyLogo";
import Footer from "./Footer";

const HomePage = ({ artistInfo, comps, setComps, routerProps }) => {
  const handleCompToggle = (artist) => {
    const compsCopy = [...comps];
    const artistIndex = compsCopy.indexOf(artist);
    artistIndex > -1
      ? compsCopy.splice(artistIndex, 1)
      : compsCopy.push(artist);
    setComps(compsCopy);
  };

  if (comps.length === 2) {
    routerProps.history.push("/followercompare");
  }

  return (
    <div className="homePage">
      <header>
        <Nav setComps={setComps} />
        <h1>
          <img className="spotify" src={spotifyLogo} alt="spotify logo" />{" "}
          Compare
        </h1>
        <h2>Pick 2</h2>
      </header>
      <main>
        {artistInfo ? (
          artistInfo.map((artist) => {
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
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
