import { FC, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { useGlobalState } from "../context/GlobalState";

const MusicPlayer: FC = () => {
  const { isPlaying, setIsPlaying } = useGlobalState();
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioInstance = new Audio("/hasta-el-fin.mp3");
    audioInstance.loop = true;
    audioInstance.currentTime = 8;
    setAudio(audioInstance);

    if (isPlaying) {
      audioInstance.play().catch((error) => {
        console.error("Error al iniciar reproducción automática:", error);
      });
    }

    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 7;
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audio) return;

    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);

    if (newPlayingState) {
      audio.play().catch((error) => {
        console.error("Error al reproducir audio:", error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  };

  return (
    <IconButton
      onClick={togglePlay}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.7)",
        },
      }}
    >
      {isPlaying ? (
        <PauseCircleFilledIcon fontSize="large" />
      ) : (
        <PlayCircleFilledWhiteIcon fontSize="large" />
      )}
    </IconButton>
  );
};

export default MusicPlayer;
