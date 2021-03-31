import React from "react";
import Custom from "../Custom/Custom";

import styles from './Profile.module.css'


const Profile = () => {
    return (
        <div>
            <div>
                <img className={styles.profileImg} src='https://img.gazeta.ru/files3/105/7775105/0_104ea4_24b192e5_orig.jpg'
                     alt='owl'/>
            </div>
            <Custom />
        </div>
    )
}

export default Profile;