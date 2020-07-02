import React, { useState, useEffect } from "react";
import artistPicsUrls from "../artistPicsUrls";
import "./CompPage.css";

export default function CompPage({ comps, apiToken, done }) {
  const artistID = comps.map((artist) => artist.id);

  const [artistOneTracks, setArtistOneTracks] = useState({});
  const [artistTwoTracks, setArtistTwoTracks] = useState({});
  const [style1, setStyle1] = useState({});
  const [style2, setStyle2] = useState({});

  // setTimeout(() => {
  //   const newStyle = {
  //     opacity: 1,
  //     width: `${comps[0].popularity}%`,
  //   };
  //   setStyle1(newStyle);
  // }, 500);

  // setTimeout(() => {
  //   const newStyle = {
  //     opacity: 1,
  //     width: `${comps[1].popularity}%`,
  //   };
  //   setStyle2(newStyle);
  // }, 500);

  useEffect(() => {
    const url = `https://api.spotify.com/v1/artists/${artistID[0]}/top-tracks?country=SE`;
    const makeApiCall = async () => {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_api_key}`,
        },
      });
      const json = await res.json();
      setArtistOneTracks(json);
    };
    makeApiCall();
  }, []);

  useEffect(() => {
    const url = `https://api.spotify.com/v1/artists/${artistID[1]}/top-tracks?country=SE`;
    const makeApiCall = async () => {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_api_key}`,
        },
      });
      const json = await res.json();
      setArtistTwoTracks(json);
    };
    makeApiCall();
  }, []);

  return (
    <>
      {comps[0] && artistOneTracks.tracks && artistTwoTracks.tracks ? (
        <div className="compPage">
          <div className='artistStats'>
            <h1>{comps[0].name}</h1>
            <img
              className="compPic"
              src={
                artistPicsUrls.filter((url) => url.name === comps[0].name)[0]
                  .url
              }
              alt={comps[0].name}
            />
            <p>Artist Popularity: {comps[0].popularity}</p>
            {/* progress bar credit to Florin Pop:
            https://www.youtube.com/watch?v=AbRgaY0khPM */}
            <div className="progress">
              <div className="progress-done" style={style1}>
                {comps[0].popularity}
              </div>
            </div>
            <p>Followers: {comps[0].followers.total}</p>
            <h3>Top Tracks</h3>
            {artistOneTracks.tracks.slice(0, 5).map((track) => {
              return (
                <>
                  <p>{track.name}</p>
                  <p>Popularity: {track.popularity}</p>
                  <audio controls>
                    <source src={track.preview_url} type="" />
                  </audio>
                </>
              );
            })}
          </div>
          <div className='artistStats'>
            <h1>{comps[1].name}</h1>
            <img
              className="compPic"
              src={
                artistPicsUrls.filter((url) => url.name === comps[1].name)[0]
                  .url
              }
              alt={comps[1].name}
            />
            <p>Artist Popularity: {comps[1].popularity}</p>
            <div className="progress">
              <div className="progress-done" style={style2}>
                {comps[1].popularity}
              </div>
            </div>
            <p>Followers: {comps[1].followers.total}</p>
            <h3>Top Tracks</h3>
            {artistTwoTracks.tracks.slice(0, 5).map((track) => {
              return (
                <>
                  <p>{track.name}</p>
                  <p>Popularity: {track.popularity}</p>
                  <audio controls>
                    <source src={track.preview_url} type="" />
                  </audio>
                </>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}
