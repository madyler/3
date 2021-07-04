import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';



const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    // let av =<img src={props.ava}/>;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activ}>
                <img src={props.ava}/>  {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;