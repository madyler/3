import React from 'react';
import ProfileInfo, {ProfileInfoPropsType} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus,
                                                     isOwner, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}
                         isOwner={isOwner}
                         status={status}
                         updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;