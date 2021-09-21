import React from 'react'
import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU"
                alt={''}/>
            {props.message}
            <div>
                <span>Likes   :   </span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post