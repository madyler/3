import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    // let i = props.id;
    // let n = i % 2;
    //     n = 0 ? s.message.marginLeft = 100 + 'px' :
  //  let mrg = () => {s.message.marginLeft = 200+px;}
  // mrg()
    return (

        <div className={s.message}>
            {props.message}
        </div>

    )
}


export default Message;
