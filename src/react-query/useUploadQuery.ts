import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ChangeEvent, useCallback, useMemo} from "react";
import {UploadFileService} from "../services/uploadFile.services";

export const useUploadQuery = (
  folder: string,
  setUrl: (url: string) => void,
  entityType: 'user' | 'community' | 'img' | 'repost' | "singleImg" | 'music',
  userId?: string | number,
  communityId?: string,
  albumId?: string,
  fetch?: {
    refetch: () => Promise<any>;
  }
) => {

  const client = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: (data: FormData) => UploadFileService.uploadFile(data, folder),
    onSuccess: ({data}) => {
      if (setUrl) {
        setUrl(data[0].url);
      }

      if (entityType === 'img') {
        client.invalidateQueries({queryKey: ['myAlbum', 'albumOne']});
        fetch?.refetch();
      }

      if (entityType === 'singleImg') {
        // client.invalidateQueries({queryKey: ['photo', 'photoOne']});
        // getOnePhoto.refetch();
        client.invalidateQueries({queryKey: ['myPhotos', 'allMyPhotos']});
        fetch?.refetch();
      }

      if (entityType === 'repost') {
        client.invalidateQueries({queryKey: ['myPhotos', 'allMyPhotos']});
        fetch?.refetch();
      }

      if (entityType === 'user') {
        client.invalidateQueries({queryKey: ['user', 'one']});
        fetch?.refetch();
      }

      if (entityType === 'community') {
        client.invalidateQueries({queryKey: ['communityOne', 'community']});
        fetch?.refetch();
      }

      if(entityType === 'music') {
        client.invalidateQueries({queryKey: ['myMusic']})
        fetch?.refetch()
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