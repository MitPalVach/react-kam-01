import React from 'react';
import FriendsOnline from "./FriendsOnline";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        friendsOnline: state.friendsOnline
    }
}

const FriendsOnlineContainer = connect(mapStateToProps)(FriendsOnline);

export default FriendsOnlineContainer;