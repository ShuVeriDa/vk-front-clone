import {ChangeEvent, FC, useRef, useState} from 'react';
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
import {PlaylistCE} from "../../components/Music/Playlist/PlaylistCE/PlaylistCE";
import {Playlists} from "../../components/Music/Playlist/Playlists/Playlists";
import {FullPlaylist} from "../../components/Music/Playlist/FullPlaylist/FullPlaylist";

interface IMusicPageProps {
  page: 'main' | 'allTracks' | 'myTracks' | 'playlists'
}

export const MusicPage: FC<IMusicPageProps> = ({page}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [selectedMusicId, setSelectedMusicId] = useState<string | null>(null)
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null)
  const [openEdit, setOpenEdit] = useState(false)
  const [openUpload, setOpenUpload] = useState(false)
  const [openRepost, setOpenRepost] = useState(false)
  const [openPlaylistCE, setOpenPlaylistCE] = useState(false)
  const [editPlaylist, setEditPlaylist] = useState(false)
  const [openFullPlaylist, setOpenFullPlaylist] = useState(false)
  const [value, setValue] = useState('')
  const [currentAudio, setCurrentAudio] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const onClickCloseEdit = () => setOpenEdit(false)
  const onClickEdit = (musicId: string) => {
    setSelectedMusicId(musicId)
    setOpenEdit(true)
  }
  const onClickClosePlaylistCE = () => setOpenPlaylistCE(false)
  const onClickCloseEditPlaylist = () => setEditPlaylist(false)
  const onClickCloseFullPlaylist = () => setOpenFullPlaylist(false)

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

  const handleProgressBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.currentTarget.value);
    setCurrentTime(time);
    audioRef.current!.currentTime = time;
  };

  console.log(selectedPlaylistId)

  return (
    <div className={styles.wrapper}>
      <MusicContext.Provider value={{
        myMusic: myMusic!,
        foundMusic: foundMusic!,
        isSuccess,
        isSuccessFoundMusic,
        value,
        status,
        progressBarRef,
        setValue,
        setOpenPlaylistCE,
        setEditPlaylist,
        setCurrentTime,
        setCurrentAudio,
        setSelectedMusicId,
        setSelectedPlaylistId,
        setOpenEdit,
        setOpenUpload,
        setDuration,
        setOpenFullPlaylist,
        handleProgressBarChange,
        openRepost,
        setOpenRepost,
        setIsPlaying,
        audioRef,
        selectedMusicId,
        selectedPlaylistId,
        openEdit,
        openFullPlaylist,
        openPlaylist: openPlaylistCE,
        editPlaylist,
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
        {page === "main" && <>
          <Music/>
          <Playlists />
        </>}
        {page === "myTracks" &&
          <div className={styles.myTracks}>
            <Tracks page={page}
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
                    setValue={setValue}
            />
            {isSuccessFoundMusic && foundMusic.length > 0
              ? <MusicItemWrapper music={foundMusic!}
                                  styles={styles}
              />
              : <MusicNotFound text={value}/>}
          </div>
        }
        {page === "playlists" &&
          <div className={styles.myTracks}>
            <Tracks page={page}
                    setValue={setValue}
            />
          </div>
        }
        {<ModalWindow open={openEdit}>
          {selectedMusicId && <MusicEdit musicId={selectedMusicId}
                                         onClickClose={onClickCloseEdit}/>}
        </ModalWindow>}
        {<ModalWindow open={openUpload}>
          <MusicUpload onClickClose={onClickCloseUpload}/>
        </ModalWindow>}
        {<ModalWindow open={openPlaylistCE}>
          <PlaylistCE title={'Создание нового плейлиста'}
                      isUpdate={false}
                      onClickClose={onClickClosePlaylistCE}
          />
        </ModalWindow>}

        {<ModalWindow open={editPlaylist}>
          {selectedPlaylistId && <PlaylistCE title={'Редактирование плейлиста'}
                       isUpdate={true}
                       onClickClose={onClickCloseEditPlaylist}
          />}
        </ModalWindow>}
        {<ModalWindow open={openFullPlaylist} classes={styles}>
          <FullPlaylist playlistId={selectedPlaylistId!}
                        onClickClose={onClickCloseFullPlaylist}
          />
        </ModalWindow>}
        {/*{<ModalWindow open={openRepost}>*/}
        {/*  <Repost onClose={} id={} />*/}
        {/*</ModalWindow>}*/}
      </MusicContext.Provider>
    </div>
  );
};