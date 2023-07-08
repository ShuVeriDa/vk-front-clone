import {FC, useState} from 'react';
import styles from './PlaylistCEMain.module.scss';
import {PlaylistCeInfo} from "./PlaylistCEInfo/PlaylistCEInfo";
import {PlaylistCESearch} from "./PlaylistCESearch/PlaylistCESearch";
import {PlaylistCEAddMyMusic} from "./PlaylistCESearch/PlaylistCEAddMyMusic/PlaylistCEAddMyMusic";
import {PlaylistCESearchNotFound} from "./PlaylistCESearchNotFound/PlaylistCESearchNotFound";
import {PlaylistItems} from "../../PlaylistItems/PlaylistItems";
import {UseFormRegister} from "react-hook-form";
import {ICreatePlaylist, IUpdatePlaylist} from "../../../../../types/music.interface";
import {useMusicQuery} from "../../../../../react-query/useMusicQuery";
import {useDebounce} from "../../../../../hooks/useDebounce";

interface IPlaylistCEMainProps {
  coverImage: string | null
  setCoverImage: (coverImage: string | null) => void
  register: UseFormRegister<ICreatePlaylist | IUpdatePlaylist>
}

export const PlaylistCEMain: FC<IPlaylistCEMainProps> = (
  {register, setCoverImage, coverImage}
) => {
  const [value, setValue] = useState('')
  const updateSearch = useDebounce(setValue, 350)
  const {searchMusic} = useMusicQuery(undefined, {title: value})
  const {data: music, isSuccess} = searchMusic
  return (
    <div className={styles.main}>
      <PlaylistCeInfo register={register}
                      coverImage={coverImage}
                      setCoverImage={setCoverImage}
      />
      <PlaylistCESearch updateSearch={updateSearch}/>
      <PlaylistCEAddMyMusic/>

      {!music?.length || value === ''
        ? <PlaylistCESearchNotFound/>
        : <PlaylistItems music={music!} />
      }
    </div>
  );
};