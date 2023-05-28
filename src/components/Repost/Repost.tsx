import {ChangeEvent, FC, useState} from 'react';
import styles from './Repost.module.scss';
import {ClearSearchValueSVG} from "../SvgComponent";
import TextareaAutosize from "react-textarea-autosize";
import {UploadOptions} from "../UploadOptions/UploadOptions";
import {usePostsQuery} from "../../react-query/usePostsQuery";

const list = ['На своей стене', "В сообществе", "В истории", "В личном сообщении"]

interface IRepostProps {
  onClose: () => void
  id: string
}

export const Repost: FC<IRepostProps> = ({onClose, id}) => {
  const [selectedOption, setSelectedOption] = useState('На своей стене');

  const {repost} = usePostsQuery(undefined, id)
  const {mutate} = repost

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.currentTarget.value);
  };

  const option = () => {
    if(selectedOption === 'На своей стене') {
      
    }
  }

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
              <UploadOptions title={'Поделиться записью'}
                             isRepost={true}
              />
          </div>
        </div>

      </div>
    </div>
  );
};