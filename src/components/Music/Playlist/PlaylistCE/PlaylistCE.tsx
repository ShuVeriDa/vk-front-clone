import {FC, useState} from 'react';
import styles from './PlaylistCE.module.scss';
import {PlaylistHeader} from "./PlaylistCEHeader/PlaylistHeader";
import {PlaylistCEMain} from "./PlaylistCEMain/PlaylistCEMain";
import {PlaylistFooter} from "./PlaylistFooter/PlaylistFooter";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePlaylist, IMusicFull, IUpdatePlaylist} from "../../../../types/music.interface";
import {usePlaylistQuery} from "../../../../react-query/usePlaylistQuery";
import {useDebounce} from "../../../../hooks/useDebounce";

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

  const updateSearch = useDebounce(setValue, 350)

  const toggleIsMyMusic = () => {
    if(isMyMusic) {
      setValue('')
      setIsMyMusic(false)
    }
    if(!isMyMusic) {
      setValue('')
      setIsMyMusic(true)
    }
  }

  const onSubmit: SubmitHandler<ICreatePlaylist | IUpdatePlaylist> = (data) => {
    if(isCreate) {
      create({title: data.title, description: data.description, coverUrl: coverImage!, musicIds: musicIds})
      reset()
    }

    onClickCloseHandler()
  }

  return (
    <div className={styles.wrapper}>
      <PlaylistHeader title={title}
                      onClickClose={onClickCloseHandler}
                      isMyMusic={isMyMusic}
                      toggleIsMyMusic={toggleIsMyMusic}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <PlaylistCEMain register={register}
                        updateSearch={updateSearch}
                        toggleIsMyMusic={toggleIsMyMusic}
                        isMyMusic={isMyMusic}
                        value={value}
                        // setValue={setValue}
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