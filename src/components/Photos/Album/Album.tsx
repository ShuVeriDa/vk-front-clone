import {FC, useState} from 'react';
import styles from '../Photos.module.scss';
import {AlbumsHeader} from "./AlbumsHeader/AlbumsHeader";
import {AlbumItem} from "./AlbumItem/AlbumItem";
import {usePhotoAlbumQuery} from "../../../react-query/usePhotoAlbumQuery";
import {useNavigate} from "react-router-dom";
import {ModalWindow} from "../../ModalWindow/ModalWindow";
import {CreateAlbum} from "./CreateAlbum/CreateAlbum";

interface IAlbumProps {
}

export const Album: FC<IAlbumProps> = () => {
    const [open, setOpen] = useState<boolean>(false)

    const onClickOpen = () => {
      setOpen(true)
    }

    const onClickClose = () => {
      setOpen(false)
    }

    const {getMyAlbums} = usePhotoAlbumQuery()
    const {data: albums, isSuccess} = getMyAlbums

    return (
      <div className={styles.wrapper}>
        <AlbumsHeader onClickOpen={onClickOpen}/>
        <div className={styles.main}>
          {isSuccess && albums.map(album => <AlbumItem key={album.id} album={album}/>)}
        </div>

        {open && <ModalWindow onClickClose={onClickClose} open={open}>
         <CreateAlbum onClickClose={onClickClose}
         />
        </ModalWindow>}
      </div>


    )

  }
;