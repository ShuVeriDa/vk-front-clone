import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {PhotoService} from "../services/photo.service";
import {ICreatePhoto, IUpdatePhoto} from "../types/photo.interface";

export const usePhotoQuery = (photoId?: string) => {
  // const getOneAlbum = useQuery({
  //   queryFn: () => AlbumService.fetchOneAlbum(albumId!),
  //   queryKey: ['myAlbum', 'one'],
  //   enabled: !!albumId
  // })
  //

  const getMyPhotos = useQuery({
    queryFn: () => PhotoService.fetchMyPhotos(),
    queryKey: ['myPhotos', 'allMyPhotos']
  })

  const client = useQueryClient()

  const createPhoto = useMutation({
    mutationFn: (data:ICreatePhoto) => PhotoService.createPhoto(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPhotos', 'allMyPhotos']})
    }
  })

  const updatePhoto = useMutation({
    mutationFn: (data:IUpdatePhoto) => PhotoService.updatePhoto(photoId!, data),
    onSuccess: () => {
      client.invalidateQueries(['myPhotos', 'allMyPhotos'])
    }
  })

  const toggleFavoritesPhoto = useMutation({
    mutationFn: (photoId: string) => PhotoService.toggleFavoritesPhoto(photoId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPhotos', 'allMyPhotos']})
    }
  })
  //
  // const deleteAlbum = useMutation({
  //   mutationFn: (albumId: string) => AlbumService.deleteAlbum(albumId),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myAlbums', 'allMyAlbums']})
  //     getMyAlbums.refetch()
  //   }
  // })
  //
  // //community
  // const getCommunityPosts = useQuery({
  //   queryFn: () => PostService.getPostsCommunityUrl(communityId!),
  //   queryKey: ['get all posts', 'in community', communityId],
  //   enabled: !!communityId
  // })

  return useMemo(() => ({
    getMyPhotos, createPhoto, updatePhoto, toggleFavoritesPhoto
  }), [getMyPhotos, createPhoto, updatePhoto, toggleFavoritesPhoto])
}