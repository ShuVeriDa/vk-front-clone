import {FC, useRef, useState} from 'react';
import styles from './MusicPage.module.scss';
import {MusicPlayer} from "../../components/Music/MusicPlayer/MusicPlayer";
import {Music} from "../../components/Music/Music/Music";
import {useMusicQuery} from "../../react-query/useMusicQuery";
import {Tracks} from "../../components/Music/Music/Tracks/Tracks";
import {MusicItems} from "../../components/Music/Music/MusicItems/MusicItems";
import {MusicSearch} from "../../components/Music/Music/MusicSearch/MusicSearch";
import {TrackItems} from "../../components/Music/Music/Tracks/TrackItems/TrackItems";
import {MusicItem} from "../../components/Music/Music/MusicItems/MusicItem/MusicItem";
import cn from "clsx";

interface IMusicPageProps {
  page: 'main' | 'allTracks' | 'myTracks'
}

export const MusicPage: FC<IMusicPageProps> = ({page}) => {
  const [value, setValue] = useState('')
  const [currentAudio, setCurrentAudio] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  const {searchMusic, getMyMusic} = useMusicQuery(undefined, {title: value})
  const {data: myMusic, isSuccess} = getMyMusic;
  const {data: foundMusic, isSuccess: isSuccessFoundMusic, status} = searchMusic

  const pauseAudio = async () => {
    await audioRef.current?.pause();
    setIsPlaying(false);
  }

  const playAudio = async () => {
    await audioRef.current?.play();
    setIsPlaying(true);
  }

  const onClickHandler = (i: number) => {
    if (currentAudio !== i) {
      setIsPlaying(true)
      setCurrentAudio(i)
      audioRef.current?.load();
      playAudio()
    }

    if (currentAudio === i) {
      setCurrentAudio(i)
      if (isPlaying) {
        pauseAudio()
      }
      if (!isPlaying) {
        playAudio()
      }
    }
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
      {page === "main" && <Music myMusic={myMusic!}
                                 foundMusic={foundMusic!}
                                 isSuccessFoundMusic={isSuccessFoundMusic}
                                 isSuccess={isSuccess}
                                 audioRef={audioRef}
                                 currentAudio={currentAudio}
                                 duration={duration}
                                 currentTime={currentTime}
                                 isPlaying={isPlaying}
                                 value={value}
                                 status={status}
                                 setCurrentTime={setCurrentTime}
                                 setCurrentAudio={setCurrentAudio}
                                 setIsPlaying={setIsPlaying}
                                 setValue={setValue}
                                 playAudio={playAudio}
                                 pauseAudio={pauseAudio}
      />}
      {page === "myTracks" &&
        <div className={styles.myTracks}>
          <Tracks page={page}
                  value={value}
                  setValue={setValue}
          />
          <div className={styles.musicItems}>
            {isSuccess && myMusic.map((m, i) => <div key={m.id}
               className={cn(styles.musicItemWrapper, i === currentAudio && styles.active)}
               onClick={() => onClickHandler(i)}
          >
            <MusicItem
              setCurrentTime={setCurrentTime}
              setCurrentAudio={setCurrentAudio}
              audioRef={audioRef}
              currentAudio={currentAudio}
              currentTime={currentTime}
              isSuccess={isSuccess}
              musicItem={m}
              classes={styles.musicItem}
              index={i}
              isPlayer={false}
              isPlaying={isPlaying}
            />
          </div>)
          }
        </div>

        </div>

      }

    </div>
  );
};