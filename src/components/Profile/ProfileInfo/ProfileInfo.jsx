import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    {profile.fullName}
                </div>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {/*<ProfileStatus status={status} updateStatus={updateStatus}/>*/}
            </div>
        </div>
    )
}

export default ProfileInfo;