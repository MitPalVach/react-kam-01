import React from 'react';
import styles from "./FriendsAvatar.module.css";


const FriendsAvatar = (props) => {
    return (
            <div className={styles.fOnline__inner}>
                <div className={styles.fOnline__name}>{props.name}</div>
                <img className={styles.fOnline__ava} src={props.ava} alt=""/>
            </div>
    )
}

export default FriendsAvatar;