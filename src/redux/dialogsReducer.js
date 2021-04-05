const dialogsReducer = (state, action) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.unshift({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})

export default dialogsReducer;