import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {followAC, setFriendsAC, unfollowAC} from "../../redux/friendsReducer";


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setFriends: (friends) => {
            dispatch(setFriendsAC(friends))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
