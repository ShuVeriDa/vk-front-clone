import {FC} from 'react';
import styles from './FullPhotoButtons.module.scss';
import {SubmitButton} from "../../../SubmitButton/SubmitButton";

interface IFullPhotoButtonsProps {
  isCreateComment: boolean
}

export const FullPhotoButtons: FC<IFullPhotoButtonsProps> = ({isCreateComment}) => {
  return (
    <div className={styles.wrapperBtns}>
    {isCreateComment && <div className={styles.btns}>
      <SubmitButton title={'Отмена'} classes={styles.cancel}/>
      <SubmitButton title={'Отправить'} classes={styles.submit}/>
    </div>}
    </div>
  );
};