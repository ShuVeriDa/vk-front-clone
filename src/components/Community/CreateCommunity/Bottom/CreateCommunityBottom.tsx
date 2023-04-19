import {FC, useState} from 'react';
import styles from './CreateCommunityBottom.module.scss';
import {SubmitButton} from "../../../SubmitButton/SubmitButton";
import cn from "clsx";

interface ICreateCommunityHeaderProps {
}

export const Bottom: FC<ICreateCommunityHeaderProps> = () => {
  const [check, setCheck] = useState<boolean>(true)
  return (
    <div className={styles.bottom}>
      <div className={styles.rules}>
        <input type="checkbox" checked={check} onChange={(e) => setCheck(e.currentTarget.checked)}/>
        <span>Соглашаюсь с <span className={styles.blue}>правилами</span></span>
      </div>
      <div className={styles.buttons}>
        <SubmitButton title={'Отмена'} classes={styles.cancelBtn}/>
        <SubmitButton title={'Создать сообщество'} classes={cn(check ? styles.submitBtn : styles.submitBtnDisabled)} disabled={!check}/>
      </div>
    </div>
  );
};