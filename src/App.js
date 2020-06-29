import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArtistCard from "./components/ArtistCard";
import CompPage from "./components/CompPage";
import NavBar from "./components/NavBar";

function App() {
  const [artistInfo, setArtistInfo] = useState({});
  const [comps, setComps] = useState([]);

  useEffect(() => {
    const url =
      "https://api.spotify.com/v1/artists?ids=4q3ewBCX7sLwd24euuV69X,1i8SpTcr7yvPOmcqrbnVXY,7iK8PXO48WeuP03g8YR51W,1GDbiv3spRmZ1XdM1jQbT7,4obzFoKoKRHIphyHzJ35G3";
    const makeApiCall = async () => {
      const res = await fetch(url, {
        headers: {
          Authorization:
            "Bearer BQDjVowFoJn4wLuAPLJPVD_aKK6WZiiArYdn5ZUcQGDZHiPp-YySN2BQ1zObpAH4CddWVkrKq0vnorZCClXNtwmEqO5YWtjvOPA1ttMTKJoXW0N4XFlyZdUW-5GcleyN9WaioNw",
        },
      });
      const json = await res.json();
      setArtistInfo(json.artists);
    };
    makeApiCall();
  }, []);

  const handleCompToggle = (artist) => {
    const compsCopy = [...comps];
    const artistIndex = compsCopy.indexOf(artist);
    artistIndex > -1
      ? compsCopy.splice(artistIndex, 1)
      : compsCopy.push(artist);
    setComps(compsCopy);
  };

  console.log(comps)

  // useEffect(() => {
  //   const url =
  //     "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X/top-tracks?country=SE";
  //   const makeApiCall = async () => {
  //     const res = await fetch(url, {
  //       headers: {
  //         Authorization:
  //           "Bearer BQDjVowFoJn4wLuAPLJPVD_aKK6WZiiArYdn5ZUcQGDZHiPp-YySN2BQ1zObpAH4CddWVkrKq0vnorZCClXNtwmEqO5YWtjvOPA1ttMTKJoXW0N4XFlyZdUW-5GcleyN9WaioNw",
  //       },
  //     });
  //     const json = await res.json();
  //     console.log(json);
  //   };
  //   makeApiCall();
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>Reggaeton NOW</h1>

      <main>
        <Switch>
          <Route
            path="/Project-2---React"
            render={(routerProps) => (
              <HomePage
                {...routerProps}
                artistInfo={artistInfo}
                handleCompToggle={handleCompToggle}
                comps={comps}
              />
            )}
          />
          <Route
            path="/CompPage"
            render={(routerProps) => (
              <CompPage
                {...routerProps}
                comps={comps}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
