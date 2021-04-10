let updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY';
let sendMessage = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
// debugger;
    switch (action.type) {
        case updateNewMessageBody: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case sendMessage: {
            let body = state.newMessageBody;
            return {
                newMessageBody: '',
                ...state,
                messages: [{id: 6, message: body}, ...state.messages],
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: sendMessage})
export const updateNewMessageBodyCreator = (body) => ({type: updateNewMessageBody, body: body})

export default dialogsReducer;