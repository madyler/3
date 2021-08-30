import React from 'react';
import Profile from "./Profile";
import {
    getUserProfile,
    getUserStatus,
    savePhoto,
    saveProfile,
    actions,
    updateStatus
} from "../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            //15691
            //1197
            //6244
            //6206
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (<Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         savePhoto={this.props.savePhoto}
                         updateStatus={this.props.updateStatus.bind(this)}/>
        )

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

const setUserProfile = actions.setUserProfile
export default compose(
    connect(mapStateToProps,
        {
            setUserProfile,
            getUserProfile,
            getUserStatus,
            updateStatus,
            saveProfile,
            savePhoto
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)