import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import FollowerCompare from "./components/FollowerCompare";

function App() {
  const credentials = process.env.REACT_APP_api_credentials;
  const [accessToken, setAccessToken] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);
  const [comps, setComps] = useState([]);
  console.log(comps);

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

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <HomePage
              routerProps={routerProps}
              artistInfo={artistInfo}
              comps={comps}
              setComps={setComps}
            />
          )}
        />
        <Route
          path="/followercompare"
          render={(routerProps) => (
            <FollowerCompare
              {...routerProps}
              accessToken={accessToken}
              comps={comps}
            />
          )}
        />
        {/* <Route
          path="/comppage"
          render={(routerProps) => (
            <CompPage
              {...routerProps}
              accessToken={accessToken}
              comps={comps}
              done={"70"}
            />
          )}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
