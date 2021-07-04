import React from "react";
import Paginator from "../commons/Paginator/Paginator";
import User from "./User";


const Users = ({
                   totalUsersCount, pageSize, currentPage, changePage,
                   users, follow, unfollow, followingInProgress
               }) => {
    return <div>
        <Paginator pageSize={pageSize}
                   changePage={changePage}
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

export default Users;


