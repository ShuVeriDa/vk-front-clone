import {FC} from 'react';
import styles from './FullPhotoButtons.module.scss';
import {SubmitButton} from "../../../SubmitButton/SubmitButton";

interface IFullPhotoButtonsProps {
  isCreateComment: boolean
  setCreateComment: (isCreateComment:boolean) => void
}

export const FullPhotoButtons: FC<IFullPhotoButtonsProps> = ({isCreateComment, setCreateComment}) => {
  return (
    <div className={styles.wrapperBtns} style={isCreateComment ? {borderTop: '1px solid #DCE1E6'} : {}}>
    {isCreateComment && <div className={styles.btns}>
      <SubmitButton title={'Отмена'} classes={styles.cancel} onSelectType={() => setCreateComment(false)}/>
      <SubmitButton title={'Отправить'} classes={styles.submit}/>
    </div>}
    </div>
  );
};