import React from "react";
import s from './Users.module.css'
import defaultUserPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const User: React.FC<PropsType> = ({user, follow, unfollow, followingInProgress}) => {
    return (
        <div className={s.wrapper} key={user.id}>
                <br/>
                <div className={s.i}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : defaultUserPhoto} className={s.img}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div className={s.name}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={s.location}>
                    <div> u.location.country</div>
                    <div> u.location.city</div>
                </div>
            </div>
        )
}

export default User;


