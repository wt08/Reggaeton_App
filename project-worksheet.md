# Project Overview

## Project Links

- [Github](https://github.com/wt08/Reggaeton_App)
- [Netlify](https://reggaeton-compare.netlify.app/#/)

## Project Description

Reggaeton artist battle app. Can select from popular artists and comapare them side by side in spotify data. Comparison kind of like Apple iPhone comparison site (https://www.apple.com/iphone/compare/?device1=iphone11pro&device2=iphone11promax&device3=iphoneSE2ndgen) but with more interactivity.

## API

Spotify API artist data:

```
{
"external_urls": {
"spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
},
"name": "Bad Bunny",
"popularity": 100,
"type": "artist",
"uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
}
```

Spotify artist top track info:

```
{
"tracks": [
{
"album": {
"album_type": "album",
"artists": [
{
"external_urls": {
"spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
},
"href": "https://api.spotify.com/v1/tracks/0SqqAgdovOE24BzxIClpjw",
"id": "0SqqAgdovOE24BzxIClpjw",
"is_local": false,
"is_playable": true,
"name": "Yo Perreo Sola",
"popularity": 92,
"preview_url": "https://p.scdn.co/mp3-preview/3575ce15e6727094dc606c9d29e79f5830340172?cid=774b29d4f13844c495f206cafdad9c86",
"track_number": 5,
"type": "track",
"uri": "spotify:track:0SqqAgdovOE24BzxIClpjw"
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1593180055/GA%20-%20Project%202/IMG_0332_k20fjj.jpg)
- [Desktop](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1593180150/GA%20-%20Project%202/IMG_0333_gdyvph.jpg)
- [React Architecture](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1593182351/GA%20-%20Project%202/image0_trqvac.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Find and use external api
- Render data on page
- Routing
- Allow user to interact with the page
- Deploy site

#### PostMVP EXAMPLE

- Add styling
- Add interactivty effects

## Components

##### Time Frames

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component     | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------- | :------: | :------------: | :------------: | :---------: |
| Find/Use API  |    H     |      2hrs      |      1hrs      |    -hrs     |
| Render Data   |    H     |      6hrs      |      -hrs      |    4hrs     |
| Routing       |    H     |      5hrs      |      -hrs      |   1.5hrs    |
| Interactivity |    H     |      5hrs      |      -hrs      |   7.5hrs    |
| Deploying     |    H     |      -hrs      |      -hrs      |    2hrs     |
| Styling       |    L     |      8hrs      |      -hrs      |    8hrs     |
| Effects       |    L     |      6hrs      |      -hrs      |    -hrs     |
| Total         |    H     |     32hrs      |      2hrs      |    -hrs     |

## Additional Libraries

Bootstrap

## Code Snippet

Used .filter to grab the correct image when an artist is selected.

```
 <img className="compPic"
    src={artistPicsUrls.filter((url) => url.name === comps[1].name)[0].url}
    alt={comps[1].name}
/>
```
