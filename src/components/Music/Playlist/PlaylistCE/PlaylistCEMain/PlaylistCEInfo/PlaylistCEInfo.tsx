import {FC} from 'react';
import styles from './PlaylistCEInfo.module.scss';
import {PlaylistCECover} from "../PlaylistCECover/PlaylistCECover";
import {Input} from "../../../../../Input/Input";
interface IPlaylistCeInfoProps {
}

export const PlaylistCeInfo: FC<IPlaylistCeInfoProps> = () => {
  return (
    <div className={styles.info}>
      <PlaylistCECover />

      <div className={styles.inputs}>
        <Input type={'text'}
               stylesInput={styles}
               placeholder={'Название плейлиста'}
        />
        <Input type={'text'}
               stylesInput={styles}
               placeholder={'Описание плейлиста'}
        />
      </div>

    </div>
  );
};