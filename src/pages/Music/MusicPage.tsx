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

  const {getMyMusic} = useMusicQuery();
  const {data: myMusic, isSuccess} = getMyMusic;

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className={styles.wrapper}>
      <MusicPlayer myMusic={myMusic!}
                   isSuccess={isSuccess}
                   audioRef={audioRef}
                   currentAudio={currentAudio}
                   duration={duration}
                   currentTime={currentTime}
                   setDuration={setDuration}
                   setCurrentTime={setCurrentTime}
                   setCurrentAudio={setCurrentAudio}
      />

      <Music myMusic={myMusic!}
             isSuccess={isSuccess}
             audioRef={audioRef}
             currentAudio={currentAudio}
             duration={duration}
             currentTime={currentTime}
             setCurrentTime={setCurrentTime}
      />
    </div>
  );
};