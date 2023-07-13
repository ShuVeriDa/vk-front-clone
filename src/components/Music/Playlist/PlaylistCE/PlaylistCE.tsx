import {FC, useState} from 'react';
import styles from './PlaylistCE.module.scss';
import {PlaylistHeader} from "./PlaylistCEHeader/PlaylistHeader";
import {PlaylistCEMain} from "./PlaylistCEMain/PlaylistCEMain";
import {PlaylistFooter} from "./PlaylistFooter/PlaylistFooter";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePlaylist, IMusicFull, IUpdatePlaylist} from "../../../../types/music.interface";
import {usePlaylistQuery} from "../../../../react-query/usePlaylistQuery";

interface IPlaylistProps {
  title: string
  isCreate: boolean
  onClickClose: () => void
}

export const PlaylistCE: FC<IPlaylistProps> = ({title, onClickClose, isCreate}) => {
  const [isMyMusic, setIsMyMusic] = useState(false)
  const [value, setValue] = useState('')
  const [coverImage, setCoverImage] = useState<null | string>(null)
  const [addedMusic, setAddedMusic] = useState<IMusicFull[]>([])
  const {createPlaylist} = usePlaylistQuery()
  const {mutate: create} = createPlaylist

  const {register, handleSubmit, formState, reset} = useForm<ICreatePlaylist | IUpdatePlaylist>({mode: "onChange"})

  const onClickCloseHandler = () => {
    onClickClose()
    setValue('')
    setAddedMusic([])
  }

  const musicIds = addedMusic.map(music => music.id)

  const onSubmit: SubmitHandler<ICreatePlaylist | IUpdatePlaylist> = (data) => {
    if(isCreate) {
      create({title: data.title, description: data.description, coverUrl: coverImage!, musicIds: musicIds})
      console.log(reset())
      reset()
    }
    console.log(reset())

    onClickCloseHandler()
  }

  const toggleIsMyMusic = () => {
    if(isMyMusic) setIsMyMusic(false)
    if(!isMyMusic) setIsMyMusic(true)
  }

  // console.log(addedMusic)

  return (
    <div className={styles.wrapper}>
      <PlaylistHeader title={title}
                      onClickClose={onClickCloseHandler}
                      isMyMusic={isMyMusic}
                      toggleIsMyMusic={toggleIsMyMusic}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <PlaylistCEMain register={register}
                        toggleIsMyMusic={toggleIsMyMusic}
                        isMyMusic={isMyMusic}
                        value={value}
                        setValue={setValue}
                        addedMusic={addedMusic}
                        coverImage={coverImage}
                        setAddedMusic={setAddedMusic}
                        setCoverImage={setCoverImage}
        />
        <PlaylistFooter/>
      </form>
    </div>
  );
};