import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>

                <DialogItem name='Неясыть' id='1'/>
                <DialogItem name='Филин' id='2'/>
                <DialogItem name='Полярная сова' id='3'/>
                <DialogItem name='Обыкновенная сипуха' id='4'/>
                <DialogItem name='Рыбный филин' id='5'/>
                <DialogItem name='Ушастая сова' id='6'/>
                <DialogItem name='Ястребиная сова' id='7'/>
                <DialogItem name='Иглоногая сова' id='8'/>
                <DialogItem name='Совка-сплюшка' id='9'/>

            </div>
            <div className={styles.dialogsMessages}>
                <Message message='Привет, погнали мышей заточим?'/>
                <Message message='Здарова, как дел?'/>
                <Message message='Не пиши мне больше!!!'/>
                <Message message='Куда летал вчера?'/>
            </div>
        </div>
    )
}

export default Dialogs;