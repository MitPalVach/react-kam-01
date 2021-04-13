import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setFriendsAC, setTotalFriendsCountAC, unfollowAC} from "../../redux/friendsReducer";
import * as axios from "axios";
import Friends from "./Friends";

class FriendsContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalFriendsCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
            });
    }

    render() {
        return <Friends totalFriendsCount={this.props.totalFriendsCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        friends={this.props.friends}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
        />
    }
}

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
            dispatch(setTotalFriendsCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
