import {FC, ReactNode} from 'react';
import styles from './ModalWindow.module.scss';
interface IModuleWindowProps {
  open: boolean
  onClickClose: () => void
  children: ReactNode
}

export const ModalWindow: FC<IModuleWindowProps> = ({open, onClickClose, children}) => {
  return (
    <div className={`${styles.overlay} ${styles.animated} ${open ? `${styles.show}` : ''}`}>
      <div className={styles.modal}>
        {/*<svg height="200" viewBox="0 0 200 200" width="200" onClick={onClickClose}>*/}
        {/*  <title/>*/}
        {/*  <path*/}
        {/*    d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>*/}
        {/*</svg>*/}
        {children}
      </div>
    </div>
  );
};