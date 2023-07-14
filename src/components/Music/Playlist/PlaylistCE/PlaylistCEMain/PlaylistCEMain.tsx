import {FC} from 'react';
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
}

export const PlaylistCEMain: FC<IPlaylistCEMainProps> = (
  {register, setCoverImage, coverImage, setAddedMusic, isMyMusic, addedMusic, value, /*setValue,*/ toggleIsMyMusic, updateSearch}
) => {

  const {
    searchMusic, searchMyMusicAndOther
  } = useMusicQuery(undefined, {title: value === '' ? null : value})

  const {data: myMusicAndOther} = searchMyMusicAndOther
  const {data: music, isSuccess} = searchMusic

  return (
    <div className={styles.main}>
      {!isMyMusic && <PlaylistCeInfo register={register}
                                     coverImage={coverImage}
                                     setCoverImage={setCoverImage}
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
          {addedMusic && <PlaylistItems addedMusic={addedMusic}
                                        setAddedMusic={setAddedMusic}
          />
          }
        </>
      }
    </div>
  );
};