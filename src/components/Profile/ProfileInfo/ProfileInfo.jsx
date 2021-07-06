import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultUserPhoto from '../../../assets/images/user.png'


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelector = (e) =>{
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    {profile.fullName}
                </div>
                <img src={profile.photos.large || defaultUserPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelector}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;