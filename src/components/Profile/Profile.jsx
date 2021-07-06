import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    return (
        <div>
            <ProfileInfo profile={profile}
                         savePhoto={savePhoto}
                         isOwner={isOwner}
                         status={status}
                         updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
  )
}

export default Profile;