import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {PostService} from "../services/post.service";
import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {ICreatePost, IPostCommunity, IPostCommunityData, IUpdatePost} from "../types/post.interface";
import {UploadFileService} from "../services/uploadFile.services";
import {useUsersQuery} from "./useUsersQuery";
import {useCommunityQuery} from "./useCommunityQuery";
import {usePhotoAlbumQuery} from "./usePhotoAlbumQuery";
import {usePhotoQuery} from "./usePhotoQuery";

export const useUploadQuery = (
  folder: string,
  setUrl: (url: string) => void,
  entityType: 'user' | 'community' | 'img' | 'repost' | "singleImg",
  userId?: string | number,
  communityId?: string,
  albumId?: string
) => {
  const {getUserById} = useUsersQuery(userId!);
  const {getOneAlbum} = usePhotoAlbumQuery(albumId)
  const {fetchOne} = useCommunityQuery(communityId);
  const {getMyPhotos, getOnePhoto} = usePhotoQuery()

  const client = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: (data: FormData) => UploadFileService.uploadFile(data, folder),
    onSuccess: ({data}) => {
      if (setUrl) {
        setUrl(data[0].url);
      }

      if (entityType === 'img') {
        client.invalidateQueries({queryKey: ['myAlbum', 'albumOne']});
        getOneAlbum.refetch();
      }

      if (entityType === 'singleImg') {
        // client.invalidateQueries({queryKey: ['photo', 'photoOne']});
        // getOnePhoto.refetch();
        client.invalidateQueries({queryKey: ['myPhotos', 'allMyPhotos']});
        getMyPhotos.refetch();
      }

      if (entityType === 'repost') {
        client.invalidateQueries({queryKey: ['myPhotos', 'allMyPhotos']});
        getMyPhotos.refetch();
      }

      if (entityType === 'user') {
        client.invalidateQueries({queryKey: ['user', 'one']});
        getUserById.refetch();
      }

      if (entityType === 'community') {
        client.invalidateQueries({queryKey: ['communityOne', 'community']});
        fetchOne.refetch();
      }
    },
  });

  const uploadFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
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