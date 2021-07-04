import React from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, setUserProfile, updateStatus} from "../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){userId = this.props.autorizedUserId
            //15691
            //1197
            //6244
            //6206
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus.bind(this)}/>

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)