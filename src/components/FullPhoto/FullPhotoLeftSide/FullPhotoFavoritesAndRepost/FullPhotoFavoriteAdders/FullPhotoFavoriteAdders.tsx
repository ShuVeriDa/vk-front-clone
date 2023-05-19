import {FC} from 'react';
import styles from './FullPhotoFavoriteAdders.module.scss';
import {IUserAbbr} from "../../../../../types/user.interface";
import {avatarUrl} from "../../../../../utils/avatarUrl";

interface IFullPhotoFavoriteAddersProps {

  users: IUserAbbr[]
}

export const FullPhotoFavoriteAdders: FC<IFullPhotoFavoriteAddersProps> = ({users}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.length}>
        {users.length > 1
          ? <span>Понравилось {users.length} людям</span>
          : <span>Понравилось {users.length} человеку</span>
        }
      </div>
      <div className={styles.img}>
      {users.map(user =>
          <img key={user.id}
               src={avatarUrl(user.avatar)}
               alt={user.firstName}
          />
        )
          .splice(0, 6)
      }
        </div>
    </div>
  );
};