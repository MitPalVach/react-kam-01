import React from "react";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    // debugger;
    console.log(props);
    return (
        <div>
            <ProfileInfoContainer store={props.store}/>

            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;