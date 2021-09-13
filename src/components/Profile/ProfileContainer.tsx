import React from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateStatus} from "../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../redux/redux-store";

type DispatchPropsType = {
   // setUserProfile: (userId: number) => void
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (photo: File) => void
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType, {}> {
    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            //15691
            //1197
            //6244
            //6206
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        if (typeof userId === "number") {
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();

    }

    componentDidUpdate(prevProps:PropsType, prevState:PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (<Profile isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}
                         updateStatus={this.props.updateStatus.bind(this)}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

//const setUserProfile = actions.setUserProfile
export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            //setUserProfile,
            getUserProfile,
            getUserStatus,
            updateStatus,
            saveProfile,
            savePhoto
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)