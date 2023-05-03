import {FC} from 'react';
import {Album} from "../../components/Photos/Album/Album";

interface IPhotosProps {
}

export const AlbumsPage: FC<IPhotosProps> = () => {
  return (
    <div>
      <Album/>
    </div>
  );
};