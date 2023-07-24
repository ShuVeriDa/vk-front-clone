import {FC, ReactNode} from 'react';
import styles from './ModalWindow.module.scss';
import cn from "clsx";
interface IModuleWindowProps {
  open: boolean
  onClickClose?: () => void
  children: ReactNode
  classes?: { readonly [key: string]: string }
}

export const ModalWindow: FC<IModuleWindowProps> = ({open, onClickClose, children, classes}) => {
  return (
    <div className={cn(styles.overlay, styles.animated, open ? styles.show : '', )}>
      <div className={cn(styles.modal, classes?.radius)}>
        {children}
      </div>
    </div>
  );
};