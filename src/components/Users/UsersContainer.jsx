import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../commons/Preloader/Preloader";
import {
    follow, requestUsers, setTotalUsersCount,
    setUsers, toggleIsFetching, unfollow
} from "../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../redux/users-selector";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize,requestUsers} = this.props
        requestUsers(currentPage, pageSize)
    };

    changePage = (pageNumber) => {
        const {pageSize, requestUsers} = this.props
        requestUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    changePage={this.changePage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    requestUsers})
)(UsersContainer);