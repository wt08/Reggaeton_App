// import React, { useState, useEffect } from "react";
// import artistPicsUrls from "../artistPicsUrls";
// import "./CompPage.css";

// export default function CompPage({ accessToken, comps, apiToken, done }) {

//   console.log(comps)

//   const [artistsTracks, setArtistsTracks] = useState([]);
//   console.log(artistOneTracks)
 

//   const makeArtist1ApiCall = async () => {
//     const res = await fetch(
//       `https://api.spotify.com/v1/artists/${comps[0] ? comps[0].id : null}/top-tracks?country=SE`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const json = await res.json();
//     setArtistOneTracks(json);
//   };

//   const makeArtist2ApiCall = async () => {
//     const res = await fetch(
//       `https://api.spotify.com/v1/artists/${comps[1].id ? comps[1].id : null}/top-tracks?country=SE`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const json = await res.json();
//     setArtistTwoTracks(json);
//   };

//   useEffect(() => {
//     makeArtist1ApiCall();
//     makeArtist2ApiCall();
//   }, []);

//   return (
//     <>
//       {comps[0] && artistOneTracks.tracks && artistTwoTracks.tracks ? (
//         <div className="compPage">
//           <div className="artistStats">
//             <p>Artist Popularity:</p>
            
//               <div className="progress-done" >
//                 {comps[0].popularity}
//               </div>
            
//             <div className="stats_subsection">
//               <h3>Top Tracks</h3>

//               {artistOneTracks.tracks.slice(0, 5).map((track) => {
//                 return (
//                   <div className="tracks">
//                     <p>{track.name}</p>
//                     <p>Popularity: {track.popularity}</p>
//                     <audio controls>
//                       <source src={track.preview_url} type="" />
//                     </audio>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
    
//             <div className="stats_subsection">
//               <h3>Top Tracks</h3>

//               {artistTwoTracks.tracks.slice(0, 5).map((track) => {
//                 return (
//                   <div className="tracks">
//                     <p>{track.name}</p>
//                     <p>Popularity: {track.popularity}</p>
//                     <audio controls>
//                       <source src={track.preview_url} type="" />
//                     </audio>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }
