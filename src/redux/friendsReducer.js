const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    friends: [],
    pageSize: 5,
    totalFriendsCount: 30,
    currentPage: 1,
    isFetching: true
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
            return {...state, friends: action.friends}
        }
        case setCurrentPage: {
            return {...state, currentPage: action.currentPage}
        }
        case setTotalFriendsCount: {
            return {...state, totalFriendsCount: action.totalFriendsCount}
        }
        case toggleIsFetching: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalFriendsCount = (totalFriendsCount) => ({type: SET_TOTAL_FRIENDS_COUNT, totalFriendsCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

// export const followAC = (userId) => ({type: follow, userId});
// export const unfollowAC = (userId) => ({type: unfollow, userId});
// export const setFriendsAC = (friends) => ({type: setFriends, friends});
// export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage});
// export const setTotalFriendsCountAC = (totalFriendsCount) => ({type: setTotalFriendsCount, totalFriendsCount});
// export const toggleIsFetchingAC = (isFetching) => ({type: toggleIsFetching, isFetching});
//

export default friendsReducer;