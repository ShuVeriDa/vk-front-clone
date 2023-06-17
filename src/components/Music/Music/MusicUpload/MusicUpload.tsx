import {ChangeEvent, FC, useRef} from 'react';
import styles from './MusicUpload.module.scss';
import {MusicMWHeader} from "../MusicEditHeader/MusicMWHeader";
import {SubmitButton} from "../../../SubmitButton/SubmitButton";
import {useMusicQuery} from "../../../../react-query/useMusicQuery";
import {useUploadQuery} from "../../../../react-query/useUploadQuery";

interface IMusicUploadProps {
  onClickClose: () => void
}

export const MusicUpload: FC<IMusicUploadProps> = ({onClickClose}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {createMusic, getMyMusic} = useMusicQuery()
  const {mutate: create} = createMusic

  const uploadMusic = (url: string) => {
    create({musicUrl: url})
  }

  const {uploadFile} = useUploadQuery('music', uploadMusic, 'music', undefined, undefined, undefined, getMyMusic)

  const handleClickRef = () => inputRef.current?.click()

  const handleUploadMusic = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
    onClickClose()
  }

  return (
    <div className={styles.wrapper}>
      <MusicMWHeader title={'Выберите аудиозапись на вашем компьютере'}
                     onClickClose={onClickClose}
      />
      <div className={styles.main}>
        <h4 className={styles.restrictions}>Ограничения</h4>
        <ul>
          <li>Аудиофайл не должен превышать 200 МБ и должен быть в формате MP3.</li>
          <li>Аудиофайл не должен нарушать авторские и смежные права.</li>
        </ul>
        <div className={styles.uploadMusic}>
          <SubmitButton title={'Выбрать файл'} classes={styles.upload} onSelectType={handleClickRef} />
          <input type="file"
                 onChange={handleUploadMusic}
                 ref={inputRef}
                 hidden
          />
        </div>
      </div>
      <footer className={styles.footer}>
        <SubmitButton onSelectType={onClickClose} title={'Закрыть'} classes={styles.btn}/>
      </footer>
    </div>
  );
};