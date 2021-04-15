const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id: 1, message: 'Привет, как ты?', likeCount: 14},
        {id: 2, message: 'Я теперь тоже тут', likeCount: 21},
        {id: 3, message: 'Летал с друзьями', likeCount: 31},
        {id: 4, message: 'Приболел немного', likeCount: 24},
        {id: 5, message: 'А я новую шляпу купил', likeCount: 37},
        {id: 6, message: 'Была вчера в кафе "У сыча"', likeCount: 23},
        {id: 7, message: 'Сожрал 7 мышей, щас лопну', likeCount: 11},
        {id: 8, message: 'Мы с Филином помирились', likeCount: 33},
        {id: 9, message: 'Я влетел к вам', likeCount: 41}
    ],
    newPostText: 'Здарова, я мелкий сов!',
    profile: null
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;