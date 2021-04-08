import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    return <Dialogs onNewMessageChange={onNewMessageChange}
                    onSendMessageClick={onSendMessageClick}
                    newMessageBody={newMessageBody} state={state}/>
}

export default DialogsContainer;