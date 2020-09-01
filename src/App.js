import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import CompPage from "./components/CompPage";
import spotifyLogo from "./spotifyLogo";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const credentials = process.env.REACT_APP_api_credentials;
  const [accessToken, setAccessToken] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);
  const [comps, setComps] = useState([]);
  if (comps.length > 2) {
    setComps([]);
  }

  // creating API call function with parameter of access token
  const makeApiCall = async (token) => {
    const res = await fetch(
      "https://api.spotify.com/v1/artists?ids=4q3ewBCX7sLwd24euuV69X,1i8SpTcr7yvPOmcqrbnVXY,4obzFoKoKRHIphyHzJ35G3,7iK8PXO48WeuP03g8YR51W,1GDbiv3spRmZ1XdM1jQbT7",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json = await res.json();
    setArtistInfo(json.artists);
  };

  // getData function first gets access token, then calls makeApiCall and passes it access token
  const getData = async () => {
    // getting access token
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: "grant_type=client_credentials",
    });
    const json = await res.json();
    // calling makeApiCall with acquired access token from above
    makeApiCall(json.access_token);
    // set access token to variable for use in other comps
    setAccessToken(json.access_token);
  };

  // runs getData on every app mount
  useEffect(() => {
    getData();
  }, []);

  const handleCompToggle = (artist) => {
    const compsCopy = [...comps];
    const artistIndex = compsCopy.indexOf(artist);
    artistIndex > -1
      ? compsCopy.splice(artistIndex, 1)
      : compsCopy.push(artist);
    setComps(compsCopy);
  };

  const clearComps = () => setComps([]);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand className="home">Home</Navbar.Brand>
        </Link>
      </Navbar>
      <header>
        <h1>
          <img className="spotify" src={spotifyLogo} alt="" /> Compare
        </h1>
        <h2>Pick 2</h2>
      </header>

      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <HomePage
                {...routerProps}
                artistInfo={artistInfo}
                handleCompToggle={handleCompToggle}
                comps={comps}
                clearComps={clearComps}
              />
            )}
          />
          <Route
            path="/CompPage"
            render={(routerProps) => (
              <CompPage
                {...routerProps}
                accessToken={accessToken}
                comps={comps}
                done={"70"}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
