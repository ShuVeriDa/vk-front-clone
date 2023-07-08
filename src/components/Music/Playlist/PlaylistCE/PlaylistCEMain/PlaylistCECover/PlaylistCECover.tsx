import {ChangeEvent, FC, MutableRefObject, RefObject, useRef, useState} from 'react';
import styles from './PlaylistCECover.module.scss';
import {ClearSearchValueSVG} from "../../../../../SvgComponent";
import {useUploadQuery} from "../../../../../../react-query/useUploadQuery";
import {serverUrl} from "../../../../../../utils/serverUrl";

interface IPlaylistCoverProps {
  coverImage: string | null
  setCoverImage: (coverImage: string | null) => void
}

export const PlaylistCECover: FC<IPlaylistCoverProps> = ({setCoverImage, coverImage}) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const {uploadFile} = useUploadQuery('playlist', setCoverImage, 'cover', undefined)

  const onChangeCover =async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
  }

  const onClearCover = () => setCoverImage(null)
  console.log(coverImage)

  return (
    <div className={styles.cover}
         onClick={() => inputRef.current?.click()}
         style={coverImage ? {cursor: "default"} : {}}
    >
      {coverImage
        ? <>
          <img src={serverUrl(coverImage)}
               alt={coverImage}
               className={styles.img}
          />
          <ClearSearchValueSVG styles={styles.clear}
                               onClick={onClearCover}
          />
        </>
        : <>
          <span className={styles.plus}>+</span>
          <span className={styles.title}>Обложка</span>
          <input type="file"
                 name={'cover'}
                 accept='image/png, image/jpeg'
                 ref={inputRef}
                 onChange={onChangeCover}
                 hidden
          />
        </>
      }

    </div>
  );
};