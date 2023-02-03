//react imports
import React from "react";

//next imports
import useSWR from "swr";
import SongCard from "./SongCard";

const NowPlaying = () => {
  const fetcher = () => fetch("/api/spotify").then((res) => res.json());

  const { data: song } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 5 * 1000,
    fallbackData: "loading",
  });

  if (!song.isPlaying) {
    return <p>Not listening to anything...</p>;
  }

  return <SongCard song={song} showAlbum={false} showRelease={false} />;
};

export default NowPlaying;
