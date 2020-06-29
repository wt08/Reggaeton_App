import React from "react";
import CompButton from "./CompButton";
import { Link, Route, Switch } from "react-router-dom";

export default function ArtistCard({
  name,
  imageSrc,
  handleCompToggle,
  comps,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageSrc} alt={name} />
      <CompButton handleCompToggle={handleCompToggle} comps={comps} />
    </div>
  );
}
