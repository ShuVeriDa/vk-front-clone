import {FC} from 'react';
import styles from './MusicPage.module.scss';
import {MusicPlayer} from "../../components/Music/MusicPlayer/MusicPlayer";
interface IMusicPageProps {
}

export const MusicPage: FC<IMusicPageProps> = () => {
  return (
    <div>
     <MusicPlayer />
    </div>
  );
};