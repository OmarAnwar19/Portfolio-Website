// Use of backend is strongly advised as it hides internal requests that include your access token.
import { SpotifyService } from "spotify-now-playing";

export default async function (req, res) {
  const spotify = new SpotifyService(
    process.env.NEXT_PUBLIC_CLIENT_ID,
    process.env.NEXT_PUBLIC_CLIENT_SECRET,
    process.env.NEXT_PUBLIC_REFRESH_TOKEN
  );
  const song = await spotify.getCurrentSong();

  res.json(song);
}
