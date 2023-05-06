import {FC} from 'react';
import {Album} from "../../components/Photos/Album/Album";
import {Photos} from "../../components/Photos/Photos/Photos";

interface IPhotosProps {
}

export const AlbumsPage: FC<IPhotosProps> = () => {
  return (
    <div>
      <Album/>
      <Photos />
    </div>
  );
};