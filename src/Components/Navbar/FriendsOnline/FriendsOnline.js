import React from 'react';
import FriendsAvatar from "./FriendsAvatar/FriendsAvatar";

import styles from './FriendsOnline.module.css';


const FriendsOnline = (props) => {
    let friendsAvatar = props.online.map(f => <FriendsAvatar key={f.id} name={f.name} ava={f.ava} id={f.id}/>);

    return (
        <div className={styles.fOnline}>
            <h5 className={styles.fOnline__title}>Друзья онлайн</h5>
            {friendsAvatar}
        </div>
    )
}

export default FriendsOnline;