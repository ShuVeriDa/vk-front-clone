import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {CommunityService} from "../services/community.service";
import {useCommunitySearchQuery} from "./useCommunitySearchQuery";
import {ICommunityCreate, ICommunityUpdate} from "../types/community.interface";
import {useNavigate} from "react-router-dom";


export const useCommunityQuery = (communityId?: string ) => {
  const {searchCommunity} = useCommunitySearchQuery()
  const navigate = useNavigate()

  const fetchOne = useQuery({
    queryFn: () => CommunityService.fetchOne(communityId!),
    queryKey: ['communityOne', 'community'],
    enabled: !!communityId
  })

  const client = useQueryClient()

  const createCommunity = useMutation({
    mutationFn: (data: ICommunityCreate) => CommunityService.createCommunity(data),
    onSuccess: ({id}) => {
      navigate(`/group/${id}`);
      // searchCommunity.refetch()
    }
  })

  const updateCommunity = useMutation({
    mutationFn: (data: ICommunityUpdate) => CommunityService.updateCommunity(communityId!, data),
    onSuccess: () => {
      client.invalidateQueries(['communityOne', 'community'])
    }
  })

  const addCommunity = useMutation({
    mutationFn: (communityId: string) => CommunityService.addCommunity(communityId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['communities', 'all']})
      client.invalidateQueries({queryKey: ['communityOne', 'community']})
    }
  })

  const removeCommunity = useMutation({
    mutationFn: (communityId: string) => CommunityService.removeCommunity(communityId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['communityOne', 'community']})
      searchCommunity.refetch()
    }
  })

  return useMemo(() => ({
    fetchOne,
    searchCommunity,
    addCommunity,
    removeCommunity,
    createCommunity,
    updateCommunity
  }), [fetchOne, searchCommunity, addCommunity, removeCommunity, createCommunity, updateCommunity])
}
