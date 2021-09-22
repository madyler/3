import React, {useEffect} from 'react'
import Paginator from '../commons/Paginator/Paginator'
import User from './User'
import {UsersSearchForm} from './UsersSearchForm'
import {FilterType, requestUsers} from '../redux/users-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from '../redux/users-selector'

type PropsType = {}

export const Users: React.FC<PropsType> = (props) => {

    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <div>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        <Paginator pageSize={pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}
                   totalItemsCount={totalUsersCount}
        />
        <div>
            {users.map(u => <User key={u.id}
                                  user={u}
                                  follow={follow}
                                  unfollow={unfollow}
                                  followingInProgress={followingInProgress}
                />
            )}
        </div>
    </div>
}


