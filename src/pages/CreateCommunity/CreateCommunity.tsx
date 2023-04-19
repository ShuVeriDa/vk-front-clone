import {FC} from 'react';
import styles from './CreateCommunity.module.scss';
import {ClearSearchValueSVG} from "../../components/SvgComponent";
import {SubmitButton} from "../../components/SubmitButton/SubmitButton";
import {Header} from "../../components/Community/CreateCommunity/Header/CreateCommunityHeader";
import {Bottom} from "../../components/Community/CreateCommunity/Bottom/CreateCommunityBottom";

interface ICreateCommunityProps {
}

export const CreateCommunity: FC<ICreateCommunityProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header/>

        <Bottom/>
      </div>
    </div>
  );
};