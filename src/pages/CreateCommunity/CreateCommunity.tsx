import {FC} from 'react';
import styles from './CreateCommunity.module.scss';
import {Header} from "../../components/Community/CreateCommunity/Header/CreateCommunityHeader";
import {Bottom} from "../../components/Community/CreateCommunity/Bottom/CreateCommunityBottom";
import {CreateCommunityMain} from "../../components/Community/CreateCommunity/Main/CreateCommunityMain";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICommunityCreate} from "../../types/community.interface";

interface ICreateCommunityProps {
}

export const CreateCommunity: FC<ICreateCommunityProps> = () => {

  const {createCommunity} = useCommunityQuery()
  const {mutate: create, data: community,} = createCommunity

  const {register, handleSubmit, formState, reset} = useForm<ICommunityCreate>({mode: "onChange"})

  const onSubmit: SubmitHandler<ICommunityCreate> = (data) => {
    create(data)
    reset()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CreateCommunityMain register={register}
                               formState={formState}
          />
          <Bottom/>
        </form>
      </div>
    </div>
  );
};