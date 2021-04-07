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
    newPostText: 'Здарова, я мелкий сов!'
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 10,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;

        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})


export default profileReducer;