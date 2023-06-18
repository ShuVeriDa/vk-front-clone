import {FC, useState} from 'react';
import {Album} from "../../components/Photos/Album/Album";
import {Photos} from "../../components/Photos/Photos/Photos";
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {CreateAlbum} from "../../components/Photos/Album/CreateAlbum/CreateAlbum";

interface IPhotosProps {
}

export const AlbumsPage: FC<IPhotosProps> = () => {
  const [open, setOpen] = useState<boolean>(false)

  const onClickOpen = () => {
    setOpen(true)
  }

  const onClickClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Album onClickOpen={onClickOpen}/>
      <Photos />

      {open && <ModalWindow onClickClose={onClickClose} open={open}>
        <CreateAlbum onClickClose={onClickClose}
        />
      </ModalWindow>}
    </div>
  );
};