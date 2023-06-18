import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {UserService} from "../services/user.service";
import {useMemo} from "react";
import {IUserUpdate} from "../types/user.interface";
import {useNavigate} from "react-router-dom";

export const useUsersQuery = (userId: string | number) => {
  const getUserById = useQuery({
    queryFn: () => UserService.fetchUser(userId!),
    queryKey: ['user', 'one', userId],
    enabled: !!userId,
    // keepPreviousData: false,
    // refetchOnMount: 'always',
  })

  const client = useQueryClient()

  const updateUser = useMutation({
    mutationFn: (data: IUserUpdate) => UserService.updateUser(userId, data),
    onSuccess: () => {
      client.invalidateQueries( ['user', 'one'])
    }
  })

  return useMemo(() => ({
    getUserById,
    updateUser
  }), [getUserById, updateUser])
}
