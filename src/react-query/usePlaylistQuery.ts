import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {MusicService} from "../services/music.service";
import {ICreatePlaylist, IToggleMusicToPlaylist, IUpdatePlaylist} from "../types/music.interface";

export const usePlaylistQuery = (playlistId?: string) => {
  const fetchOnePlaylist = useQuery({
    queryFn: () => MusicService.fetchOnePlaylist(playlistId!),
    queryKey: ['onePlaylist'],
    enabled: !!playlistId
  })

  const fetchPlaylists = useQuery({
    queryFn: () => MusicService.fetchPlaylists(),
    queryKey: ['myPlaylists']
  })

  const client = useQueryClient()

  const createPlaylist = useMutation({
    mutationFn: (data: ICreatePlaylist) => MusicService.createPlaylist(data),
    onSuccess: () => {
      client.invalidateQueries(['myPlaylists'])
    }
  })

  const updatePlaylist = useMutation({
    mutationFn: (data: IUpdatePlaylist) => MusicService.updatePlaylist(data, playlistId!),
    onSuccess: () => {
      client.invalidateQueries(['myPlaylists'])
    }
  })

  const removePlaylist = useMutation({
    mutationFn: () => MusicService.removePlaylist(playlistId!),
    onSuccess: () => {
      client.invalidateQueries(['myPlaylists'])
      fetchPlaylists.refetch()
    }
  })

  const toggleMusicToPlaylist = useMutation({
    mutationFn: (data: IToggleMusicToPlaylist) => MusicService.toggleMusicToPlaylist(playlistId!, data),
    onSuccess: () => {
      client.invalidateQueries(['onePlaylist'])
    }
  })


  return useMemo(() => ({
    fetchOnePlaylist, fetchPlaylists, createPlaylist, updatePlaylist, removePlaylist, toggleMusicToPlaylist
  }), [createPlaylist, updatePlaylist, removePlaylist, toggleMusicToPlaylist, fetchOnePlaylist, fetchPlaylists])
}