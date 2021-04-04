import React from "react";
import {NavLink} from "react-router-dom";

import styles from './DialogItem.module.css';


const DialogItem = (props) => {
    return (
        <div className={styles.dialogs__item}>
            <NavLink className={styles.dialogs__itemLink}
                     to={"/dialogs/" + props.id} activeClassName={styles.dialogs__itemLink_active}>
                <img className={styles.dialogs__itemLink_img} src={props.friendsAvatar} alt=""/>
<div className={styles.dialogs__item_name}>
                {props.name}
</div>
            </NavLink>
        </div>
    )
}

export default DialogItem;