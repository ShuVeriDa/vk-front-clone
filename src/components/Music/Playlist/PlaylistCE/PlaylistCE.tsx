import {FC, useState} from 'react';
import styles from './PlaylistCE.module.scss';
import {PlaylistHeader} from "./PlaylistCEHeader/PlaylistHeader";
import {PlaylistCEMain} from "./PlaylistCEMain/PlaylistCEMain";
import {PlaylistFooter} from "./PlaylistFooter/PlaylistFooter";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePlaylist, IUpdatePlaylist} from "../../../../types/music.interface";
import {usePlaylistQuery} from "../../../../react-query/usePlaylistQuery";

interface IPlaylistProps {
  title: string
  isCreate: boolean
  onClickClose: () => void
}

export const PlaylistCE: FC<IPlaylistProps> = ({title, onClickClose, isCreate}) => {
  const [coverImage, setCoverImage] = useState<null | string>(null)
  const {createPlaylist} = usePlaylistQuery()
  const {mutate: create} = createPlaylist

  const {register, handleSubmit, formState, reset} = useForm<ICreatePlaylist | IUpdatePlaylist>({mode: "onChange"})

  const onSubmit: SubmitHandler<ICreatePlaylist | IUpdatePlaylist> = (data) => {
    if(isCreate) {
      create({title: data.title, description: data.description, coverUrl: coverImage!})
    }
    reset()
    onClickClose()
  }
  return (
    <div className={styles.wrapper}>
      <PlaylistHeader title={title} onClickClose={onClickClose}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PlaylistCEMain register={register}
                        coverImage={coverImage}
                        setCoverImage={setCoverImage}
        />
        <PlaylistFooter/>
      </form>
    </div>
  );
};