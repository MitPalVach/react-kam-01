import React from "react";
import Posts from "../Posts/Posts";
import MyPosts from "../MyPosts/MyPosts";

import styles from './Custom.module.css'


const Custom = () => {
    return (
        <div className={styles.custom}>
            <div className={styles.avatar}>
                <img className={styles.avatarImg}
                     src="https://i.pinimg.com/474x/f7/53/4b/f7534bbc6075afdb395eef6ea3a4ef95.jpg" alt="avatar"/>
            </div>
            <MyPosts/>
            <Posts/>
        </div>
    )
}

export default Custom;