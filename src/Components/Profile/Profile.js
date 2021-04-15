import React from "react";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfoContainer profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;