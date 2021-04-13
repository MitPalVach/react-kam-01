const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setFriends = 'SET_FRIENDS';
const setCurrentPage = 'SET_CURRENT_PAGE';
const setTotalFriendsCount = 'SET_TOTAL_FRIENDS_COUNT';


let initialState = {
    friends: [],
    //     [
    //     {
    //         id: 1,
    //         followed: true,
    //         fullName: 'Неясыть',
    //         status: 'Спасибо, я сыт!',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/sova-neyasyt.jpeg'
    //     },
    //     {
    //         id: 2,
    //         followed: false,
    //         fullName: 'Филин',
    //         status: 'Я ленивая жопа',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/filin.jpeg'
    //     },
    //     {
    //         id: 3,
    //         followed: true,
    //         fullName: 'Полярная сова',
    //         status: 'Холодно, пздц',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/polyarnaya-belaya-sova.jpeg'
    //     },
    //     {
    //         id: 4,
    //         followed: false,
    //         fullName: 'Обыкновенная сипуха',
    //         status: 'Самая обыкновенная сипуха',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/sipuha.jpeg'
    //     },
    //     {
    //         id: 5,
    //         followed: false,
    //         fullName: 'Рыбный филин',
    //         status: 'Люблю совят и рыбку',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/rybniy-filin.jpeg'
    //     },
    //     {
    //         id: 6,
    //         followed: true,
    //         fullName: 'Ушастая сова',
    //         status: 'Меня штырит!!!',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/ushastaya-sova.jpeg'
    //     },
    //     {
    //         id: 7,
    //         followed: true,
    //         fullName: 'Ястребиная сова',
    //         status: 'HawkEye',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/yastrebinnaya-sova.jpeg'
    //     },
    //     {
    //         id: 8,
    //         followed: false,
    //         fullName: 'Иглоногая сова',
    //         status: 'Я колючка',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/iglononogaya-sova.jpeg'
    //     },
    //     {
    //         id: 9,
    //         followed: true,
    //         fullName: 'Совка-сплюшка',
    //         status: 'Спать хочу',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/sovka-splushka.jpeg'
    //     },
    //     {
    //         id: 10,
    //         followed: true,
    //         fullName: 'Неясыть',
    //         status: 'Спасибо, я сыт!',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/sova-neyasyt.jpeg'
    //     },
    //     {
    //         id: 11,
    //         followed: false,
    //         fullName: 'Филин',
    //         status: 'Я ленивая жопа',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/filin.jpeg'
    //     },
    //     {
    //         id: 12,
    //         followed: true,
    //         fullName: 'Полярная сова',
    //         status: 'Холодно, пздц',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/polyarnaya-belaya-sova.jpeg'
    //     },
    //     {
    //         id: 13,
    //         followed: false,
    //         fullName: 'Обыкновенная сипуха',
    //         status: 'Самая обыкновенная сипуха',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/sipuha.jpeg'
    //     },
    //     {
    //         id: 14,
    //         followed: false,
    //         fullName: 'Рыбный филин',
    //         status: 'Люблю совят и рыбку',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/rybniy-filin.jpeg'
    //     },
    //     {
    //         id: 15,
    //         followed: true,
    //         fullName: 'Ушастая сова',
    //         status: 'Меня штырит!!!',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/ushastaya-sova.jpeg'
    //     },
    //     {
    //         id: 16,
    //         followed: true,
    //         fullName: 'Ястребиная сова',
    //         status: 'HawkEye',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/yastrebinnaya-sova.jpeg'
    //     },
    //     {
    //         id: 17,
    //         followed: false,
    //         fullName: 'Иглоногая сова',
    //         status: 'Я колючка',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/iglononogaya-sova.jpeg'
    //     },
    //     {
    //         id: 18,
    //         followed: true,
    //         fullName: 'Совка-сплюшка',
    //         status: 'Спать хочу',
    //         location: {city: 'Казань', country: 'Россия'},
    //         photoUrl: 'img/friends_avatars/sovka-splushka.jpeg'
    //     }
    // ],
    pageSize: 5,
    totalFriendsCount: 30,
    currentPage: 3

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
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: follow, userId});
export const unfollowAC = (userId) => ({type: unfollow, userId});
export const setFriendsAC = (friends) => ({type: setFriends, friends});
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage});
export const setTotalFriendsCountAC = (totalFriendsCount) => ({type: setTotalFriendsCount, totalFriendsCount});


export default friendsReducer;