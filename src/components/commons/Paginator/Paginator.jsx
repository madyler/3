import React, {useState} from "react";
import s from './Paginator.module.css'
import classNames from 'classnames/bind'

let Paginator = ({totalItemsCount, pageSize, currentPage = 1, changePage, portionSize = 10}) => {
    let cn = classNames.bind(s);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}

        {pages
            .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={cn( {[s.selectedPage]:currentPage === p }, s.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 changePage(p)
                             }}>{p}</span>
            })}

        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>

}

export default Paginator;