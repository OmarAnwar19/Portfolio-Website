//react imports
import React from "react";

//next imports
import Link from "next/link";

//mui imports
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const SongCard = ({ song, showAlbum, showRelease }) => {
  return (
    <Box sx={{ maxWidth: 300, maxHeight: 150 }}>
      <Link href={song?.url || "#"}>
        <Card
          sx={{
            display: "flex",
            maxHeight: "100%",
            maxWidth: "100%",
            bgcolor: "spotify.main",
            color: "white ",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "40%" }}
            src={song.album?.image || "/assets/img/cover.png"}
            alt={`${song.title} album cover`}
          />
          <Box
            sx={{
              display: "flex",
              width: "60%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="div" variant="h5">
                {song.title}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {song.artists?.name.join(", ") || "unknown"}
              </Typography>
              {showAlbum && (
                <Typography variant="subtitle2" component="div">
                  {`Album: ${song.album?.name}`}
                </Typography>
              )}
              {showRelease && (
                <Typography variant="subtitle2" component="div">
                  {`Release: ${song.album?.release}`}
                </Typography>
              )}
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default SongCard;
