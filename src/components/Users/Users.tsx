import React from 'react'
import Paginator from '../commons/Paginator/Paginator'
import User from './User'
import {UserType} from '../../types/types'
import {UsersSearchForm} from './UsersSearchForm'
import {FilterType} from '../redux/users-reducer'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged,
                                        users, follow, unfollow, followingInProgress, onFilterChanged
                                    }) => {
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
                                  followingInProgress={followingInProgress}/>
            )}
        </div>
    </div>
}

export default Users


