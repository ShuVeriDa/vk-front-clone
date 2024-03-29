import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {AlbumService} from "../services/album.service";
import {ICreatePhotoAlbum, ICreatePhotoInAlbum, IUpdatePhotoAlbum} from "../types/photoAlbum.interface";

export const usePhotoAlbumQuery = (albumId?: string) => {
  const getOneAlbum = useQuery({
    queryFn: () => AlbumService.fetchOneAlbum(albumId!),
    queryKey: ['myAlbum', 'albumOne'],
    enabled: !!albumId
  })

  const getMyAlbums = useQuery({
    queryFn: () => AlbumService.fetchMyAlbums(),
    queryKey: ['myAlbums', 'allMyAlbums']
  })

  const client = useQueryClient()

  const createAlbum = useMutation({
    mutationFn: (data:ICreatePhotoAlbum) => AlbumService.createAlbum(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myAlbums', 'allMyAlbums']})
    }
  })

  const createPhotoInAlbum = useMutation({
    mutationFn: (data:ICreatePhotoInAlbum) => AlbumService.createPhotoInAlbum(albumId!, data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myAlbum', 'albumOne']})
    }
  })

  const updateAlbum = useMutation({
    mutationFn: (data:IUpdatePhotoAlbum) => AlbumService.updateAlbum(albumId!, data),
    onSuccess: () => {
      client.invalidateQueries(['myAlbums', 'allMyAlbums'])
    }
  })

  const deleteAlbum = useMutation({
    mutationFn: (albumId: string) => AlbumService.deleteAlbum(albumId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myAlbums', 'allMyAlbums']})
      getMyAlbums.refetch()
    }
  })
  //
  // //community
  // const getCommunityPosts = useQuery({
  //   queryFn: () => PostService.getPostsCommunityUrl(communityId!),
  //   queryKey: ['get all posts', 'in community', communityId],
  //   enabled: !!communityId
  // })

  return useMemo(() => ({
    getMyAlbums,
    createAlbum,
    createPhotoInAlbum,
    getOneAlbum,
    updateAlbum,
    deleteAlbum
  }), [getMyAlbums, getOneAlbum, createAlbum, createPhotoInAlbum, deleteAlbum, updateAlbum])
}