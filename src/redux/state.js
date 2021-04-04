let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Неясыть', avatar: 'img/friends_avatars/sova-neyasyt.jpeg'},
                {id: 2, name: 'Филин', avatar: 'img/friends_avatars/filin.jpeg'},
                {id: 3, name: 'Полярная сова', avatar: 'img/friends_avatars/polyarnaya-belaya-sova.jpeg'},
                {id: 4, name: 'Обыкновенная сипуха', avatar: 'img/friends_avatars/sipuha.jpeg'},
                {id: 5, name: 'Рыбный филин', avatar: 'img/friends_avatars/rybniy-filin.jpeg'},
                {id: 6, name: 'Ушастая сова', avatar: 'img/friends_avatars/ushastaya-sova.jpeg'},
                {id: 7, name: 'Ястребиная сова', avatar: 'img/friends_avatars/yastrebinnaya-sova.jpeg'},
                {id: 8, name: 'Иглоногая сова', avatar: 'img/friends_avatars/iglononogaya-sova.jpeg'},
                {id: 9, name: 'Совка-сплюшка', avatar: 'img/friends_avatars/sovka-splushka.jpeg'}
            ],
            messages: [
                {id: 1, message: 'Привет, погнали мышей заточим?'},
                {id: 2, message: 'Здарова, как дел?'},
                {id: 3, message: 'Не пиши мне больше!!!'},
                {id: 4, message: 'Куда летал вчера?'},
                {id: 5, message: 'Слетаем к сычу?'}
            ],
            newMessageBody: ''

        },
        friendsOnline: {
            sitebar: [
                {id: 1, name: 'Неясыть', ava: 'img/ava_1.png'},
                {id: 2, name: 'Филин', ava: 'img/ava_2.png'},
                {id: 3, name: 'Полярная сова', ava: 'img/ava_3.png'}
            ]
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {  // возможность обратиться к state
        return this._state;
    },

    subscribe(observer) {  // наблюдатель
        this._callSubscriber = observer;
    },

    // =====
    dispatch(action) {  // dispatch(отправлять) (action - объект, {type: example-> 'ADD-POST'})
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 10,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.unshift({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})
export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})


export default store;










