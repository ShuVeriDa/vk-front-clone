import {useQuery} from "@tanstack/react-query";
import {UserService} from "../services/user.service";
import {useMemo} from "react";

export const useUsersQuery = (userId: string | number) => {
  const getUserById = useQuery({
    queryFn: () => UserService.fetchUser(userId!),
    queryKey: ['user', userId],
  })

  return useMemo(() => ({
    getUserById,
  }), [getUserById])
}
