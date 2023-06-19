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
import {MusicUpload} from "../../components/Music/Music/MusicUpload/MusicUpload";
import MusicContext from "../../context/MusicContext";

interface IMusicPageProps {
  page: 'main' | 'allTracks' | 'myTracks'
}

export const MusicPage: FC<IMusicPageProps> = ({page}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [selectedMusicId, setSelectedMusicId] = useState<string | null>(null)
  const [openEdit, setOpenEdit] = useState(false)
  const [openUpload, setOpenUpload] = useState(false)
  const [openRepost, setOpenRepost] = useState(false)
  const [value, setValue] = useState('')
  const [currentAudio, setCurrentAudio] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickCloseEdit = () => setOpenEdit(false)
  const onClickEdit = (musicId: string) => {
    setSelectedMusicId(musicId)
    setOpenEdit(true)
  }

  const onClickCloseUpload = () => setOpenUpload(false)


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
      <MusicContext.Provider value={{
        myMusic: myMusic!,
        foundMusic: foundMusic!,
        isSuccess,
        isSuccessFoundMusic,
        value,
        status,
        setValue,
        setCurrentTime,
        setCurrentAudio,
        setSelectedMusicId,
        setOpenEdit,
        setOpenUpload,
        setDuration,
        openRepost,
        setOpenRepost,
        setIsPlaying,
        audioRef,
        selectedMusicId,
        openEdit,
        openUpload,
        currentAudio,
        duration,
        currentTime,
        isPlaying,
        onClickCloseEdit,
        onClickEdit,
        onClickCloseUpload,
        pauseAudio,
        playAudio
      }}>
        <MusicPlayer/>
        {page === "main" && <Music/>}
        {page === "myTracks" &&
          <div className={styles.myTracks}>
            <Tracks page={page}
                    value={value}
                    setValue={setValue}
            />
            {isSuccess && myMusic.length
              ? <MusicItemWrapper music={myMusic}
                                  styles={styles}/>
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
                                  styles={styles}
              />
              : <MusicNotFound text={value}/>}
          </div>
        }

        {<ModalWindow open={openEdit}>
          {selectedMusicId && <MusicEdit musicId={selectedMusicId}
                                         onClickClose={onClickCloseEdit}/>}
        </ModalWindow>}
        {<ModalWindow open={openUpload}>
          <MusicUpload onClickClose={onClickCloseUpload}/>
        </ModalWindow>}
        {/*{<ModalWindow open={openRepost}>*/}
        {/*  <Repost onClose={} id={} />*/}
        {/*</ModalWindow>}*/}
      </MusicContext.Provider>
    </div>
  );
};