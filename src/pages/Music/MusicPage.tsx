import {FC, useRef, useState} from 'react';
import styles from './MusicPage.module.scss';
import {MusicPlayer} from "../../components/Music/MusicPlayer/MusicPlayer";
import {Music} from "../../components/Music/Music/Music";
import {useMusicQuery} from "../../react-query/useMusicQuery";
import {Tracks} from "../../components/Music/Music/Tracks/Tracks";
import {MusicItemWrapper} from "../../components/Music/Music/MusicItems/MusicItemWrapper/MusicItems";
import {MusicNotFound} from "../../components/Music/Music/MusicNotFound/MusicNotFound";
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {MusicEdit} from "../../components/Music/Music/MusicEdit/MusicEdit";

interface IMusicPageProps {
  page: 'main' | 'allTracks' | 'myTracks'
}

export const MusicPage: FC<IMusicPageProps> = ({page}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [selectedMusicId, setSelectedMusicId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [currentAudio, setCurrentAudio] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickClose = () => setOpen(false)
  const onClickEdit = (musicId: string) => {
    setSelectedMusicId(musicId)
    setOpen(true)
  }


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
                                 onClickEdit={onClickEdit}
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
          {isSuccess && myMusic.length
            ? <MusicItemWrapper music={myMusic}
                                audioRef={audioRef}
                                currentAudio={currentAudio}
                                onClickEdit={onClickEdit}
                                currentTime={currentTime}
                                isSuccess={isSuccess}
                                isPlaying={isPlaying}
                                setCurrentTime={setCurrentTime}
                                setCurrentAudio={setCurrentAudio}
                                setIsPlaying={setIsPlaying}
                                playAudio={playAudio}
                                pauseAudio={pauseAudio}
                                styles={styles}
            />
            : <MusicNotFound text={value}/>
          }

        </div>
      }
      {page === "allTracks" &&
        <div className={styles.myTracks}>
          <Tracks page={page}
                  value={value}
                  setValue={setValue}
          />
          {isSuccessFoundMusic && foundMusic.length > 0
            ? <MusicItemWrapper music={foundMusic!}
                                audioRef={audioRef}
                                currentAudio={currentAudio}
                                currentTime={currentTime}
                                isSuccess={isSuccessFoundMusic}
                                isPlaying={isPlaying}
                                setCurrentTime={setCurrentTime}
                                setCurrentAudio={setCurrentAudio}
                                setIsPlaying={setIsPlaying}
                                onClickEdit={onClickEdit}
                                playAudio={playAudio}
                                pauseAudio={pauseAudio}
                                styles={styles}
            />
            : <MusicNotFound text={value}/>}
        </div>
      }

      {
        <ModalWindow open={open}
        >
          {
             selectedMusicId && <MusicEdit musicId={selectedMusicId}
                        onClickClose={onClickClose}
            />
        }
        </ModalWindow>
      }
    </div>
  );
};