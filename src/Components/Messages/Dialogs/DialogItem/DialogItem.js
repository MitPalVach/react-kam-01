import React from "react";

import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={styles.dialogs__item}>
            <NavLink className={styles.dialogs__itemLink}
                     to={"/dialogs/" + props.id} activeClassName={styles.active}>
                {props.name}</NavLink>
        </div>
    )
}

export default DialogItem;