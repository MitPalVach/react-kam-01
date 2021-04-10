const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setFriends = 'SET_FRIENDS';


let initialState = {
    friends: [ ]

};


const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: true}
                    }
                    return f;
                })
            }
        case unfollow:
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: false}
                    }
                    return f;
                })
            }
        case setFriends: {
            return {...state, friends: [...state.friends, ...action.friends]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: follow, userId});
export const unfollowAC = (userId) => ({type: unfollow, userId});
export const setFriendsAC = (friends) => ({type: setFriends, friends});


export default friendsReducer;