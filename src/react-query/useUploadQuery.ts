import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {PostService} from "../services/post.service";
import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {ICreatePost, IPostCommunity, IPostCommunityData, IUpdatePost} from "../types/post.interface";
import {UploadFileService} from "../services/uploadFile.services";
import {useUsersQuery} from "./useUsersQuery";
import {useCommunityQuery} from "./useCommunityQuery";
// export const useUploadQuery = (folder: string, setUrl: (url: string) => void, userId: string | number) => {
//   const {getUserById} = useUsersQuery(userId)
//
//   const client = useQueryClient()
//
//   const {mutate} = useMutation({
//     mutationFn: (data: FormData) => UploadFileService.uploadFile(data, folder),
//     onSuccess: ({data}) => {
//       setUrl(data[0].url)
//       client.invalidateQueries({queryKey: ['user', 'one']})
//       getUserById.refetch()
//       // client.invalidateQueries({queryKey: ['user', 'one']})
//     }
//   })
//
//   const uploadFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
//
//     const files = e.target.files
//     if (!files?.length) return
//
//     const formData = new FormData()
//     formData.append('file', files[0])
//
//     await mutate(formData)
//   }, [mutate])
//
//   return useMemo(() => ({
//     uploadFile,
//   }), [uploadFile])
// }
export const useUploadQuery = (
  folder: string,
  setUrl: (url: string) => void,
  entityType: 'user' | 'community',
  userId?: string | number,
  communityId?: string,

) => {
  const {getUserById} = useUsersQuery(userId!);
  const {fetchOne} = useCommunityQuery(communityId);

  const client = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: (data: FormData) => UploadFileService.uploadFile(data, folder),
    onSuccess: ({data}) => {
      if (setUrl) {
        setUrl(data[0].url);
      }

      if (entityType === 'user') {
        client.invalidateQueries({queryKey: ['user', 'one']});
        getUserById.refetch();
      } else {
        client.invalidateQueries({queryKey: ['communityOne', 'community']});
        fetchOne.refetch();
      }
    },
  });

  const uploadFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files?.length) return;
      const formData = new FormData();
      formData.append('file', files[0]);
      await mutate(formData);
    },
    [mutate]
  );

  return useMemo(() => ({uploadFile}), [uploadFile]);
};