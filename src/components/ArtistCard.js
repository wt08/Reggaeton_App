import React from "react";
import SelectButton from "./SelectButton";
import CompAlert from "./CompAlert";
import "./ArtistCard.css";

export default function ArtistCard({
  artist,
  name,
  imageSrc,
  handleCompToggle,
  comps,
}) {
  return (
    <div className={`artistCard ${comps.includes(artist) ? 'colorEffect' : null}`} onClick={handleCompToggle}>
      <h2>{name}</h2>
      <img className="artistImage" src={imageSrc} alt={name} />
      {/* <SelectButton handleCompToggle={handleCompToggle} /> */}
      {/* {comps.length === 2 && comps[comps.length - 1].name === name ? (
        <CompAlert />
      ) : null} */}
    </div>
  );
}
