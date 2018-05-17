First commit was for a final Codecademy project.

Things that i have changed or added:
-----------------------------------
1. Enabled the Enter key as an alternative to the 'SEARCH' button.
2. Added Album cover image to each track result.
3. Updated Access Token Logic so that The function is only fired upon window load insted of every initial search input.
4. Restyled the web app with colors, margins, paddings, and such.
5. Play and pause animation for clicking and hovering over the album cover image. Cursor 'pointer' as well.
6. Preview audio of each track fetched from Spotfiy.
7. Gave the user an acknowledgement of a saved playlist to their Spotify account.
8. Updated Search input to show an error if the input value is empty.
9. Removed Track from searchResults if it has been added to the new playlist.
10. Used fetch to grab the users enpoint and the users playlists endpoint from sportify.
11. Created a new feature that shows the current users playlists on Spotify.
12. Added a dropdown feture to show songs that are in the users current playlist.

let response = await fetch("https://api.spotify.com/v1/users/217rpp2ue2e4gigtmvpslp3ki/playlists/1QWNwatkade9xzao9hDtcX/tracks", {
	headers: { Authorization: `Bearer BQALeg0Qidycfm_Lyst-qXnMD4iXrZfAs-eYqufH15RoWaPzIrUlHou-mYCyAyGPnAGOYUjndo_rwFzPConBHJa_vptDB26dmO0jassJdAfpqXgEOGdrg9KqiUeWd8t5qmQ1GCingJfG2IxZUcAHxfVilDZIM2BFOEr_OlpaBIgxUm9lwP-0nTBjC3S9o3Y`}
});
let track = await response.json()
console.log(track)
