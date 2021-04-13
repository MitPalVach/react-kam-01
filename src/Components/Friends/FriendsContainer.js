import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setFriends,
    setTotalFriendsCount,
    toggleIsFetching

    // followAC,
    // unfollowAC,
    // setCurrentPageAC,
    // setFriendsAC,
    // setTotalFriendsCountAC,
    // toggleIsFetchingAC

} from "../../redux/friendsReducer";
import * as axios from "axios";
import Friends from "./Friends";
import Preloader from "../Common/Preloader/Preloader";


class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(response.data.items);
                this.props.setTotalFriendsCount(response.data.totalFriendsCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(response.data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Friends totalFriendsCount={this.props.totalFriendsCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     friends={this.props.friends}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }
}
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setFriends: (friends) => {
//             dispatch(setFriendsAC(friends))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalFriendsCount: (totalCount) => {
//             dispatch(setTotalFriendsCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setFriends,
    setCurrentPage,
    setTotalFriendsCount,
    toggleIsFetching
})(FriendsContainer);

// export default connect(mapStateToProps, {
//     follow: followAC,
//     unfollow: unfollowAC,
//     setFriends: setFriendsAC,
//     setCurrentPage: setCurrentPageAC,
//     setTotalFriendsCount: setTotalFriendsCountAC,
//     toggleIsFetching: toggleIsFetchingAC
// })(FriendsContainer);
