import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import CompPage from "./components/CompPage";
import spotifyLogo from "./spotifyLogo";
import Nav from './components/Nav'

function App() {

  const credentials = process.env.REACT_APP_api_credentials
  const [accessToken, setAccessToken] = useState({})
  const [artistInfo, setArtistInfo] = useState({});
  console.log(artistInfo)
  const [comps, setComps] = useState([]);
  console.log(comps);
  
 
  useEffect(() => {
    const getKey = async () => {
      const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            `Basic ${credentials}`,
        },
        body: "grant_type=client_credentials",
      });
      const json = await res.json();
      setAccessToken(json.access_token)
    };
    const makeApiCall = async () => {
          const res = await fetch("https://api.spotify.com/v1/artists?ids=4q3ewBCX7sLwd24euuV69X,1i8SpTcr7yvPOmcqrbnVXY,4obzFoKoKRHIphyHzJ35G3,7iK8PXO48WeuP03g8YR51W,1GDbiv3spRmZ1XdM1jQbT7", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const json = await res.json();
          setArtistInfo(json.artists);
        };
    getKey();
    makeApiCall();
  }, []);

  

  return (
    <div className="App">
      <Nav />
      <header>
        <h1>
          <img className="spotify" src={spotifyLogo} alt="spotify logo" /> Compare
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
                comps={comps}
                setComps={setComps}
              />
            )}
          />
          <Route
            path="/CompPage"
            render={(routerProps) => (
              <CompPage {...routerProps} accessToken={accessToken} comps={comps} done={"70"} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
