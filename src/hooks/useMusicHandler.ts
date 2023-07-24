import MusicContext from "../context/MusicContext";
import {useContext} from "react";

export const useMusicHandlers = () => {
  const {
    currentAudio, audioRef, setCurrentAudio, pauseAudio, playAudio, setIsPlaying, isPlaying, isSuccess
  } = useContext(MusicContext)!;

  const onClickHandler = async (i: number) => {
    if (currentAudio !== i) {
      setIsPlaying(true);
      setCurrentAudio(i);
      audioRef.current?.load();
      await playAudio();
    }

    if (currentAudio === i) {
      setCurrentAudio(i);
      if (isPlaying) {
        await pauseAudio();
      } else {
        await playAudio();
      }
    }
  };

  return { onClickHandler, isSuccess, currentAudio };
};