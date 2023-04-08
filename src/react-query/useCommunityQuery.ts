import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {CommunityService} from "../services/community.service";
import {ISearchCommunityParams} from "../types/community.interface";

export const useCommunityQuery = (params?: ISearchCommunityParams | undefined ) => {
  const searchCommunity = useQuery({
    queryFn: () => CommunityService.searchCommunity(params!),
    queryKey: ['community', 'all', params],
  })

  const client = useQueryClient()

  const addCommunity = useMutation({
    mutationFn: (communityId: string) => CommunityService.addCommunity(communityId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['community', 'all']})
    }
  })
  const removeCommunity = useMutation({
    mutationFn: (communityId: string) => CommunityService.removeCommunity(communityId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['community', 'all']})
      searchCommunity.refetch()
    }
  })

  return useMemo(() => ({
    searchCommunity,
    addCommunity,
    removeCommunity
  }), [searchCommunity, addCommunity, removeCommunity])
}
