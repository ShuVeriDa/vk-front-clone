import {ISearchCommunityParams} from "../types/community.interface";
import {useQuery} from "@tanstack/react-query";
import {CommunityService} from "../services/community.service";
import {useMemo} from "react";

export const useCommunitySearchQuery = (params?: ISearchCommunityParams | undefined) => {
  const searchCommunity = useQuery({
    queryFn: () => CommunityService.searchCommunity(params!),
    queryKey: ['communities', 'all', params],
  })

  return useMemo(() => ({
    searchCommunity,
  }), [ searchCommunity, ])
}