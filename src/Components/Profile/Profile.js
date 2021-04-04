import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo addPost={props.addPost} newPostText={props.state.newPostText}
                         updateNewPostText={props.updateNewPostText}/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;