import {FC} from 'react';
import styles from './CreateCommunity.module.scss';
import {ClearSearchValueSVG} from "../../components/SvgComponent";
import {SubmitButton} from "../../components/SubmitButton/SubmitButton";
import {Header} from "../../components/Community/CreateCommunity/Header/CreateCommunityHeader";
import {Bottom} from "../../components/Community/CreateCommunity/Bottom/CreateCommunityBottom";
import {CreateCommunityMain} from "../../components/Community/CreateCommunity/Main/CreateCommunityMain";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreateCommunity} from "../../types/community.interface";
import {useNavigate} from "react-router-dom";

interface ICreateCommunityProps {
}

export const CreateCommunity: FC<ICreateCommunityProps> = () => {
  const navigate = useNavigate()

  const {createCommunity} = useCommunityQuery()
  const {mutate: create, data: community} = createCommunity

  const {register, handleSubmit, formState, reset} = useForm<ICreateCommunity>({mode: "onChange"})


  const onSubmit: SubmitHandler<ICreateCommunity> = (data) => {
    create(data)
    navigate(`/groups/`)
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
        <Bottom />
        </form>
      </div>
    </div>
  );
};