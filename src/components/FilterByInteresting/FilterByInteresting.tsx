import {FC} from 'react';

import styles from './FilterByInteresting.module.scss'

interface FilterByInterestingPropsType {
}

export const FilterByInteresting: FC<FilterByInterestingPropsType> = () => {
  return (
    <div className={styles.filter}>
      FilterByInteresting 
    </div>
  );
};