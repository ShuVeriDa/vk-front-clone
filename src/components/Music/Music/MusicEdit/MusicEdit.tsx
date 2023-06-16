import {FC} from 'react';
import styles from './MusicEdit.module.scss';
import {MusicEditHeader} from "./MusicEditHeader/MusicEditHeader";
import {MusicEditMain} from "./MusicEditMain/MusicEditMain";
import {useMusicQuery} from "../../../../react-query/useMusicQuery";
interface IMusicEditProps {
  musicId: string
  onClickClose: () => void
}

export const MusicEdit: FC<IMusicEditProps> = ({musicId, onClickClose}) => {
  console.log(musicId)
  const {getOneMusic} = useMusicQuery(musicId)
  const {data: music, isSuccess} = getOneMusic
  console.log(music)

  return (
    <div className={styles.wrapper}>
      <MusicEditHeader onClickClose={onClickClose} />
      {music && <MusicEditMain music={music} onClickClose={onClickClose}/>}
    </div>
  );
};