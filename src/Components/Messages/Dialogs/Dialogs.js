import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";


const Dialogs = (props) => {
    let dialogItemsData = [
        {id: 1, name: 'Неясыть'},
        {id: 2, name: 'Филин'},
        {id: 3, name: 'Полярная сова'},
        {id: 4, name: 'Обыкновенная сипуха'},
        {id: 5, name: 'Рыбный филин'},
        {id: 6, name: 'Ушастая сова'},
        {id: 7, name: 'Ястребиная сова'},
        {id: 8, name: 'Иглоногая сова'},
        {id: 9, name: 'Совка-сплюшка'}
    ]

    let dialogMessagesData = [
        {id: 1, message: 'Привет, погнали мышей заточим?'},
        {id: 2, message: 'Здарова, как дел?'},
        {id: 3, message: 'Не пиши мне больше!!!'},
        {id: 4, message: 'Куда летал вчера?'},
        {id: 5, message: 'Слетаем к сычу?'},
    ]

    let dialogItemElements = dialogItemsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let dialogMessagesElements = dialogMessagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogItemElements}
            </div>
            <div className={styles.dialogsMessages}>
                {dialogMessagesElements}
            </div>
        </div>
    )
}

export default Dialogs;