import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {followAC, setCurrentPageAC, setFriendsAC, setFriendsTotalCountAC, unfollowAC} from "../../redux/friendsReducer";


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalFriendsCount: (totalCount) => {
            dispatch(setFriendsTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
