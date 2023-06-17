import {FC} from 'react';
import styles from './MusicEdit.module.scss';
import {MusicMWHeader} from "../MusicEditHeader/MusicMWHeader";
import {MusicEditMain} from "./MusicEditMain/MusicEditMain";
import {useMusicQuery} from "../../../../react-query/useMusicQuery";
interface IMusicEditProps {
  musicId: string
  onClickClose: () => void
}

export const MusicEdit: FC<IMusicEditProps> = ({musicId, onClickClose}) => {
  const {getOneMusic} = useMusicQuery(musicId)

  const {data: music} = getOneMusic

  return (
    <div className={styles.wrapper}>
      <MusicMWHeader onClickClose={onClickClose} title={'Редактирование аудиозаписи'} />
      {music && <MusicEditMain music={music} onClickClose={onClickClose}/>}
    </div>
  );
};