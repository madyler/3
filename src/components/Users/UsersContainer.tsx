import React from 'react'
import {useSelector} from 'react-redux'
import {Users} from './Users'
import Preloader from '../commons/Preloader/Preloader'
import {getIsFetching, getTotalUsersCount} from '../redux/users-selector'


type PropsType = {
    pageTitle: string
}

export const UsersPage: React.FC<PropsType> = (props) => {

    const isFetching = useSelector(getIsFetching)
    const totalUsersCount = useSelector(getTotalUsersCount)

    return <>
        <h2>{props.pageTitle}({totalUsersCount})</h2>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}