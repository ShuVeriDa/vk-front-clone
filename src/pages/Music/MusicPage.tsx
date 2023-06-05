import {FC, useRef, useState} from 'react';
import styles from './MusicPage.module.scss';
import {MusicPlayer} from "../../components/Music/MusicPlayer/MusicPlayer";
import {Music} from "../../components/Music/Music/Music";
import {useMusicQuery} from "../../react-query/useMusicQuery";

interface IMusicPageProps {
}

export const MusicPage: FC<IMusicPageProps> = () => {
  const [currentAudio, setCurrentAudio] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const {getMyMusic} = useMusicQuery();
  const {data: myMusic, isSuccess} = getMyMusic;

  const pauseAudio = async () => {
    await audioRef.current?.pause();
    setIsPlaying(false);
  }

  const playAudio = async () => {
    await audioRef.current?.play();
    setIsPlaying(true);
  }

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className={styles.wrapper}>
      <MusicPlayer myMusic={myMusic!}
                   isSuccess={isSuccess}
                   audioRef={audioRef}
                   currentAudio={currentAudio}
                   duration={duration}
                   currentTime={currentTime}
                   isPlaying={isPlaying}
                   setDuration={setDuration}
                   setCurrentTime={setCurrentTime}
                   setCurrentAudio={setCurrentAudio}
                   setIsPlaying={setIsPlaying}
                   playAudio={playAudio}
                   pauseAudio={pauseAudio}
      />

      <Music myMusic={myMusic!}
             isSuccess={isSuccess}
             audioRef={audioRef}
             currentAudio={currentAudio}
             duration={duration}
             currentTime={currentTime}
             isPlaying={isPlaying}
             setCurrentTime={setCurrentTime}
             setCurrentAudio={setCurrentAudio}
             setIsPlaying={setIsPlaying}
             playAudio={playAudio}
             pauseAudio={pauseAudio}
      />
    </div>
  );
};