import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, ...props}) => {
    return (
        <div>
            <ProfileInfo profile={profile}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}
                         isOwner={isOwner}
                         status={status}
                         updateStatus={updateStatus}
                         {...props}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;