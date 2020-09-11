import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './PopularityCompare.css'

const PopularityCompare = ({ comps, setComps }) => {
  return (
    <div className="popularityCompare">
      <div className="headingPopularity">
        <Nav setComps={setComps} />
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`arrowRightPopularity`}
        />
      </div>
      <h1>Popularity</h1>
      <div className="popularityMain">
        {comps.map((artist) => {
          return (
            <div className="popularityCard">
              <h4>{artist.popularity}</h4>
              <h4>{artist.name}</h4>
              <img src={artist.images[0].url} alt={artist.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularityCompare;
