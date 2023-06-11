import {FC} from 'react';
import styles from './Tracks.module.scss';
import {TracksHeader} from "./TracksHeader/TracksHeader";
import {MusicSearch} from "../MusicSearch/MusicSearch";
import {TrackItems} from "./TrackItems/TrackItems";

interface IMyTracksProps {
  page: 'main' | 'allTracks' | 'myTracks'
  value: string
  setValue: (value: string) => void
}

export const Tracks: FC<IMyTracksProps> = ({page, value, setValue}) => {

  const title = page === "allTracks" ? "Все аудиозаписи" : "Мои треки"
  return (
    <div className={styles.wrapper}>
      <TracksHeader title={title}
                    setValue={setValue}
      />
      <MusicSearch value={value}
                   setValue={setValue}
      />
      {page === "myTracks" && <TrackItems/>}
    </div>
  );
};