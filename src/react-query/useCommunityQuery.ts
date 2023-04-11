import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {CommunityService} from "../services/community.service";
import {useCommunitySearchQuery} from "./useCommunitySearchQuery";


export const useCommunityQuery = (communityId?: string ) => {
  const {searchCommunity} = useCommunitySearchQuery()

  const fetchOne = useQuery({
    queryFn: () => CommunityService.fetchOne(communityId!),
    queryKey: ['communityOne', 'one'],
    enabled: !!communityId
  })

  const client = useQueryClient()

  const addCommunity = useMutation({
    mutationFn: (communityId: string) => CommunityService.addCommunity(communityId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['communities', 'all']})
      client.invalidateQueries({queryKey: ['communityOne', 'one']})
    }
  })
  const removeCommunity = useMutation({
    mutationFn: (communityId: string) => CommunityService.removeCommunity(communityId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['communityOne', 'one']})
      searchCommunity.refetch()
    }
  })

  return useMemo(() => ({
    fetchOne,
    searchCommunity,
    addCommunity,
    removeCommunity
  }), [fetchOne, searchCommunity, addCommunity, removeCommunity])
}
