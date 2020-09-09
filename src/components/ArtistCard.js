import React from "react";
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
    </div>
  );
}
