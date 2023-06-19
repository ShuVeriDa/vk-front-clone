import {FC, useContext} from 'react';
import {MusicHeader} from "./MusicHeader/MusicHeader";
import {MusicSearch} from "./MusicSearch/MusicSearch";
import {MusicItems} from "./MusicItems/MusicItems";
import styles from './Music.module.scss';
import {MusicNotFound} from "./MusicNotFound/MusicNotFound";
import MusicContext from "../../../context/MusicContext";

interface IMusicProps {
}

export const Music: FC<IMusicProps> = () => {
  const {myMusic, setValue, value, foundMusic, isSuccessFoundMusic, setOpenUpload, status} = useContext(MusicContext)!

  const isFound = isSuccessFoundMusic && foundMusic?.length! > 0 && value.length > 0
  const isFoundMusic = isFound ? foundMusic! : myMusic
  const title = isSuccessFoundMusic && isFound ? 'Все аудиозаписи' : 'Мои треки'

  return (
    <div className={styles.wrapper}>
      <MusicHeader setOpenUpload={setOpenUpload}/>
      <MusicSearch setValue={setValue}
                   status={status}
      />
      {isSuccessFoundMusic && foundMusic?.length! === 0 && value.length > 0
        ? <MusicNotFound text={value}/>
        : <MusicItems title={title}
                      music={isFoundMusic!}
        />}

    </div>
  );
};