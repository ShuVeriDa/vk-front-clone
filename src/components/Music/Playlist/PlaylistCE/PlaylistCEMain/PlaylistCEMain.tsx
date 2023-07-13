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
  setValue: (value: string) => void
  setAddedMusic: (musicIds: IMusicFull[]) => void
  setCoverImage: (coverImage: string | null) => void
  toggleIsMyMusic: () => void
  register: UseFormRegister<ICreatePlaylist | IUpdatePlaylist>
}

export const PlaylistCEMain: FC<IPlaylistCEMainProps> = (
  {register, setCoverImage, coverImage, setAddedMusic, isMyMusic, addedMusic, value, setValue, toggleIsMyMusic}
) => {
  const updateSearch = useDebounce(setValue, 350)
  const {searchMusic} = useMusicQuery(undefined, {title: value === '' ? null : value})
  const {data: music, isSuccess} = searchMusic
  return (
    <div className={styles.main}>
      {!isMyMusic && <> <PlaylistCeInfo register={register}
                                        coverImage={coverImage}
                                        setCoverImage={setCoverImage}
      /></>}
      <PlaylistCESearch updateSearch={updateSearch}/>
      {!isMyMusic && <PlaylistCEAddMyMusic toggleIsMyMusic={toggleIsMyMusic}/>}
      {value
        ? <>
          {!music?.length
            ? <PlaylistCESearchNotFound/>
            : <PlaylistItems music={music!}
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