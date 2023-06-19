import {FC} from 'react';
import {ModalWindow} from "../../../ModalWindow/ModalWindow";

interface IMusicMoreWindowProps {
  styles: { readonly [key: string]: string }
  isVisible: boolean
  handleRepost?: () => void
}

export const MusicMoreWindow: FC<IMusicMoreWindowProps> = ({styles, isVisible, handleRepost}) => {

  return (
    <div className={styles.menu} style={isVisible ? {display: "block"} : {display: "none"}}>
      <ul>
        <li>
          Поделиться
        </li>
        <li>
          Добавить в плейлист
        </li>
      </ul>


    </div>
  );
};