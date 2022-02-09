import {APIResponseType, instance} from './api'
import {UserType} from '../types/types'

export type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 50, term = '', friend: null | boolean = null) {
        return await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}
        &term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(res => res.data)
    },
    async follow(userId: number) {
        return await instance.post<APIResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
    async unfollow(userId: number) {
        return await instance.delete<APIResponseType>(`follow/${userId}`)
            .then(res => res.data)
    }
}