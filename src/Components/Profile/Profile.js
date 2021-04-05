import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo
                addPost={props.state.addPost}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />

            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;