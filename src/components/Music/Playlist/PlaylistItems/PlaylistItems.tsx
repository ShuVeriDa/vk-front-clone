import {FC} from 'react';
import styles from './PlaylistItems.module.scss';
import {PlaylistItem} from "./PlaylistItem/PlaylistItem";
import {IMusicFull, IMyMusicAndOther} from "../../../../types/music.interface";
import cn from "clsx";

interface IPlaylistItemsProps {
  music?: IMusicFull[]
  value?: string
  myMusic?: IMusicFull[]
  myMusicAndOther?: IMyMusicAndOther
  isMyMusic?: boolean
  addedMusic: IMusicFull[]
  setAddedMusic: (musicIds: IMusicFull[]) => void
}

export const PlaylistItems: FC<IPlaylistItemsProps> = (
  {music, setAddedMusic, addedMusic, myMusic, myMusicAndOther, isMyMusic, value}
) => {
  const mus = music ? music : addedMusic

  const optionsMO = cn(styles.items, myMusicAndOther?.otherMusic?.length! < 10 || !myMusicAndOther?.otherMusic.length! && myMusicAndOther?.myMusic?.length! < 10 || !myMusicAndOther?.myMusic.length! && styles.noScroll, isMyMusic && styles.isMyMusic)
  return (
    <>
      {isMyMusic
        ? <div className={optionsMO}>
          {myMusicAndOther?.myMusic?.map(m => <PlaylistItem key={m.id}
                                                            music={m}
                                                            addedMusic={addedMusic}
                                                            title={m.title}
                                                            artist={m.artist}
                                                            setAddedMusic={setAddedMusic}
          />)}
          {myMusicAndOther?.otherMusic && <div className={styles.founded}>Найдено в глобальном поиске</div>}
          {myMusicAndOther?.otherMusic?.map(m => <PlaylistItem key={m.id}
                                                               music={m}
                                                               addedMusic={addedMusic}
                                                               title={m.title}
                                                               artist={m.artist}
                                                               setAddedMusic={setAddedMusic}
          />)

          }

        </div>
        : <div className={cn(styles.items, music?.length! < 10 || !music?.length! && styles.noScroll)}>
          {music && <div className={styles.founded}>Найдено в глобальном поиске</div>}
          {mus?.map(m => <PlaylistItem key={m.id}
                                       music={m}
                                       addedMusic={addedMusic}
                                       title={m.title}
                                       artist={m.artist}
                                       setAddedMusic={setAddedMusic}
          />)}
        </div>
      }


    </>
  );
};