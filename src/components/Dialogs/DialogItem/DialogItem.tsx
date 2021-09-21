import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

type PropsType = {
    ava: string | undefined
    name: string
    id: number
}

const DialogItem: React.FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activ}>
                <img src={props.ava} alt={''}/> {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;