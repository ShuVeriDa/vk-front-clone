import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {IUpdatePhotoAlbum} from "../types/photoAlbum.interface";
import {MusicService} from "../services/music.service";
import {ICreateMusic, ISearchMusic} from "../types/music.interface";

export const useMusicQuery = (musicId?: string, query?: ISearchMusic) => {
  const getOneMusic = useQuery({
    queryFn: () => MusicService.fetchOneMusic(musicId!),
    queryKey: ['oneMusic', musicId],
    enabled: !!musicId
  })

  const getMyMusic = useQuery({
    queryFn: () => MusicService.fetchMyMusic(),
    queryKey: ['myMusic']
  })

  const getAllMusic = useQuery({
    queryFn: () => MusicService.fetchAllMusic(),
    queryKey: ['allMusic']
  })

  const searchMusic = useQuery({
    queryFn: () => MusicService.searchMusic(query!),
    queryKey: ['searchMusic', query]
  })

  const searchMyMusicAndOther = useQuery({
    queryFn: () => MusicService.searchMyMusicAndOther(query!),
    queryKey: ['searchMyMusicAndOther', query]
  })

  const client = useQueryClient()

  const createMusic = useMutation({
    mutationFn: (data:ICreateMusic) => MusicService.createMusic(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myMusic']})
    }
  })

  const updateMusic = useMutation({
    mutationFn: (data: IUpdatePhotoAlbum) => MusicService.updateMusic(musicId!, data),
    onSuccess: () => {
      client.invalidateQueries(['myMusic'])
    }
  })

  const deleteMusic = useMutation({
    mutationFn: (musicId: string) => MusicService.deleteMusic(musicId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myMusic']})
      getMyMusic.refetch()
    }
  })

  return useMemo(() => ({
    getOneMusic, getMyMusic, getAllMusic, searchMusic, updateMusic, deleteMusic, createMusic, searchMyMusicAndOther

  }), [getOneMusic, getMyMusic, getAllMusic, searchMusic, updateMusic, deleteMusic, createMusic, searchMyMusicAndOther])
}