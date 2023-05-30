import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {PhotoService} from "../services/photo.service";
import {ICreatePhoto, IUpdatePhoto} from "../types/photo.interface";

export const usePhotoQuery = (photoId?: string) => {
  const getOnePhoto = useQuery({
    queryFn: () => PhotoService.fetchPhoto(photoId!),
    queryKey: ['photo', 'photoOne'],
    enabled: !!photoId
  })


  const getMyPhotos = useQuery({
    queryFn: () => PhotoService.fetchMyPhotos(),
    queryKey: ['myPhotos', 'allMyPhotos']
  })

  const client = useQueryClient()

  const createPhoto = useMutation({
    mutationFn: (data: ICreatePhoto) => PhotoService.createPhoto(data),
    onSuccess: () => {
      client.invalidateQueries(['myPhotos', 'allMyPhotos'])
    }
  })

  const updatePhoto = useMutation({
    mutationFn: (data: IUpdatePhoto) => PhotoService.updatePhoto(photoId!, data),
    onSuccess: () => {
      client.invalidateQueries(['myPhotos', 'allMyPhotos'])
    }
  })

  const toggleFavoritesPhoto = useMutation({
    mutationFn: (photoId: string) => PhotoService.toggleFavoritesPhoto(photoId),
    onSuccess: (data) => {
      client.invalidateQueries({queryKey: ['myPhotos', 'allMyPhotos']})
      return data
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
    getMyPhotos, getOnePhoto, createPhoto, updatePhoto, toggleFavoritesPhoto
  }), [getMyPhotos, getOnePhoto, createPhoto, updatePhoto, toggleFavoritesPhoto])
}