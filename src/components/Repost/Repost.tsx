import {ChangeEvent, FC, useState} from 'react';
import styles from './Repost.module.scss';
import {ClearSearchValueSVG} from "../SvgComponent";
import {Input} from "../Input/Input";
import TextareaAutosize from "react-textarea-autosize";
import {SubmitButton} from "../SubmitButton/SubmitButton";


const list = ['На своей стене', "В сообществе", "В истории", "В личном сообщении"]

interface IRepostProps {
  onClose: () => void
}

export const Repost: FC<IRepostProps> = ({onClose}) => {
  const [selectedOption, setSelectedOption] = useState('На своей стене');

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.currentTarget.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>Отправка фотографии</span>
        </div>
        <div className={styles.close}>
          <ClearSearchValueSVG styles={styles.closeSVG} onClick={onClose}/>
        </div>

      </div>
      <div className={styles.main}>
        <div className={styles.radio}>
          {list.map(l => {
            return (
              <label className={styles.radioItem}
                   key={l}
              >
                <input
                  type="radio"
                  value={l}
                  checked={selectedOption === l}
                  onChange={handleRadioChange}
                  style={{background: 'blue'}}
                />
                <span>{l}</span>
              </label>
            );
          })}
        </div>
        <div className={styles.textRepost}>
          <div className={styles.title}>
            <span>Ваш комментарий</span>
          </div>
          <div className={styles.textarea}>
            <TextareaAutosize />
          </div>
          <div className={styles.footer}>
            <div>
              sdadas
            </div>
            <div className={styles.btn}>
              <SubmitButton title={"Поделиться фотографией"} classes={styles.sharePhoto} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};