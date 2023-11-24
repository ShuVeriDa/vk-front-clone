import {FC, useContext} from 'react';
import styles from './PlaylistCEMain.module.scss';
import {PlaylistCeInfo} from "./PlaylistCEInfo/PlaylistCEInfo";
import {PlaylistCESearch} from "./PlaylistCESearch/PlaylistCESearch";
import {PlaylistCEAddMyMusic} from "./PlaylistCESearch/PlaylistCEAddMyMusic/PlaylistCEAddMyMusic";
import {PlaylistCESearchNotFound} from "./PlaylistCESearchNotFound/PlaylistCESearchNotFound";
import {PlaylistItems} from "../../PlaylistItems/PlaylistItems";
import {UseFormRegister} from "react-hook-form";
import {ICreatePlaylist, IMusicFull, IUpdatePlaylist} from "../../../../../types/music.interface";
import {useMusicQuery} from "../../../../../react-query/useMusicQuery";
import {useDebounce} from "../../../../../hooks/useDebounce";
import MusicContext from "../../../../../context/MusicContext";
import {usePlaylistQuery} from "../../../../../react-query/usePlaylistQuery";

interface IPlaylistCEMainProps {
  value: string
  isMyMusic: boolean
  coverImage: string | null
  addedMusic: IMusicFull[]
  // setValue: (value: string) => void
  setAddedMusic: (musicIds: IMusicFull[]) => void
  setCoverImage: (coverImage: string | null) => void
  toggleIsMyMusic: () => void
  register: UseFormRegister<ICreatePlaylist | IUpdatePlaylist>
  updateSearch: (str: string) => void
  isUpdate?: boolean
}

export const PlaylistCEMain: FC<IPlaylistCEMainProps> = (
  {register, setCoverImage, coverImage, setAddedMusic, isMyMusic, addedMusic, value, /*setValue,*/ toggleIsMyMusic, updateSearch, isUpdate}
) => {
  const {selectedPlaylistId, editPlaylist} = useContext(MusicContext)!

  const {fetchOnePlaylist} = usePlaylistQuery(selectedPlaylistId!)
  const {data: playlist} = fetchOnePlaylist

  const {
    searchMusic, searchMyMusicAndOther
  } = useMusicQuery(undefined, {title: value === '' ? null : value})

  const {data: myMusicAndOther} = searchMyMusicAndOther
  const {data: foundMusic, isSuccess} = searchMusic

  const music = playlist ? playlist.music : foundMusic

  const playlistExist = playlist ? playlist.music : addedMusic

  console.log(playlist?.music)

  return (
    <div className={styles.main}>
      {!isMyMusic && <PlaylistCeInfo register={register}
                                     coverImage={isUpdate ? playlist?.coverUrl! : coverImage}
                                     setCoverImage={setCoverImage}
                                     playlist={playlist!}
      />}
      <PlaylistCESearch updateSearch={updateSearch} value={value}/>
      {!isMyMusic && <PlaylistCEAddMyMusic toggleIsMyMusic={toggleIsMyMusic}/>}
      {value
        ? <>
          {!music?.length
            ? <PlaylistCESearchNotFound/>
            : <PlaylistItems music={music!}
                             value={value}
                             myMusicAndOther={myMusicAndOther}
                             isMyMusic={isMyMusic}
                             addedMusic={addedMusic}
                             setAddedMusic={setAddedMusic}
            />
          }
        </>
        : <>
          {playlistExist && <PlaylistItems addedMusic={playlistExist}
                                        setAddedMusic={setAddedMusic}
          />
          }
        </>
      }
    </div>
  );
};