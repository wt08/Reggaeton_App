import React from 'react'
import ArtistCard from './ArtistCard'
import { Link, Route, Switch } from 'react-router-dom';

export default function CompPage( {comps} ) {
    return (
        <div>
            <h1>Hello</h1>
            {comps[0] ? (
        comps.map((artist, index) => {
          return (
            <ArtistCard 
            key={index}
              name={artist.name}
              imageSrc = {artist.images[0].url}
            />
          )
        })
      ) : null}
        </div>
    )
}
