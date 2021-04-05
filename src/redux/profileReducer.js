const profileReducer = (state, action) => {

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