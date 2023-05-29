import {ChangeEvent, FC, useState} from 'react';
import styles from './Repost.module.scss';
import {ClearSearchValueSVG} from "../SvgComponent";
import TextareaAutosize from "react-textarea-autosize";
import {UploadOptions} from "../UploadOptions/UploadOptions";
import {usePostsQuery} from "../../react-query/usePostsQuery";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePost} from "../../types/post.interface";

type ListType = 'На своей стене' | "В сообществе" | "В истории" | "В личном сообщении"

const list: ListType[

  ] = ['На своей стене', "В сообществе", "В истории", "В личном сообщении"]

interface IRepostProps {
  onClose: () => void
  id: string
}

export const Repost: FC<IRepostProps> = ({onClose, id}) => {
  const [images, setImages] = useState<string[]>([])
  const [videos, setVideos] = useState<string[]>([])
  const [music, setMusic] = useState<string[]>([])
  const [files, setFiles] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState('На своей стене');

  const {repost} = usePostsQuery(undefined, id)
  const {mutate} = repost

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.currentTarget.value);
  };

  const uploadFiles = (url: string ,i: number) => {
    if(i === 0) setImages((prev) => [...prev, url])
    if(i === 1) setVideos((prev) => [...prev, url])
    if(i === 2) setMusic((prev) => [...prev, url])
    if(i === 3) setFiles((prev) => [...prev, url])
  }

  console.log("images: ", images)
  console.log('videos: ', videos)
  console.log("music: ", music)
  console.log("files: ", files)

  const {register, handleSubmit, formState, reset} = useForm<ICreatePost>({mode: "onChange"})

  const onSubmit: SubmitHandler<ICreatePost> = async (data) => {
    if (selectedOption === 'На своей стене') {
      mutate(data)
    }
    reset()
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.textRepost}>
            <div className={styles.title}>
              <span>Ваш комментарий</span>
            </div>
            <div className={styles.textarea}>
              <TextareaAutosize  {...register('text', {
                required: "Text is required",
                minLength: {
                  value: 1,
                  message: ''
                }
              })}/>
            </div>
            <div className={styles.footer}>
              <UploadOptions title={'Поделиться записью'}
                             isRepost={true}
                             uploadFiles={uploadFiles}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
);
};