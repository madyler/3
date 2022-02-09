import React, {useEffect} from 'react'
import User from './User'
import {UsersSearchForm} from './UsersSearchForm'
import {FilterType, followThunk, requestUsers, unfollowThunk} from '../redux/users-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from '../redux/users-selector'
import {useHistory} from 'react-router-dom'
import * as queryString from 'querystring'
import {Pagination} from 'antd'
import 'antd/dist/antd.css'
//import Paginator from '../commons/Paginator/Paginator'


type PropsType = {}
type QueryParamsType = { term?: string, friend?: string, page?: string }


export const Users: React.FC<PropsType> = (props) => {

    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()
    const history = useHistory()

    let actualPage = currentPage

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/developers',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage, history])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(followThunk(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }

    return <div>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        <Pagination showQuickJumper size="small" defaultCurrent={actualPage}
                    total={totalUsersCount} onChange={onPageChanged} defaultPageSize={50}/>
       <br/>
        {/*<Paginator pageSize={pageSize}*/}
        {/*           onPageChanged={onPageChanged}*/}
        {/*           currentPage={currentPage}*/}
        {/*           totalItemsCount={totalUsersCount}*/}
        {/*/>*/}
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


