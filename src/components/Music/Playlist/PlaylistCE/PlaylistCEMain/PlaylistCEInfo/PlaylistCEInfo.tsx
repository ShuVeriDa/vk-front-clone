import {FC} from 'react';
import styles from './PlaylistCEInfo.module.scss';
import {PlaylistCECover} from "../PlaylistCECover/PlaylistCECover";
import {Input} from "../../../../../Input/Input";
import {ICreatePlaylist, IPlaylistResponse, IUpdatePlaylist} from "../../../../../../types/music.interface";
import {UseFormRegister} from "react-hook-form";

interface IPlaylistCeInfoProps {
  coverImage: string | null
  setCoverImage: (coverImage: string | null) => void
  register: UseFormRegister<ICreatePlaylist | IUpdatePlaylist>
  playlist?: IPlaylistResponse
}

export const PlaylistCeInfo: FC<IPlaylistCeInfoProps> = ({register, setCoverImage, coverImage, playlist}) => {
  return (
    <div className={styles.info}>
      <PlaylistCECover coverImage={coverImage}
                       setCoverImage={setCoverImage}
      />
      <div className={styles.inputs}>
        <Input {...register('title', {
          required: "Название обязательно",
          minLength: {
            value: 3,
            message: "Минимальная длина должна быть больше 3 символов"
          }
        })}
               type={'text'}
               stylesInput={styles}
               placeholder={'Название плейлиста'}
               value={playlist ? playlist.title : ""}
        />
        <Input {...register('description')}
               type={'text'}
               stylesInput={styles}
               placeholder={'Описание плейлиста'}
               value={playlist ? playlist.description : ""}
        />
      </div>

    </div>
  );
};