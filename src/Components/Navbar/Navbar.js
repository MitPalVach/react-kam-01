import styles from './Navbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import FriendsOnlineContainer from "./FriendsOnline/FriendsOnlineContainer";


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link}
                         to={"/profile"} activeClassName={styles.active}>
                    Профиль</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link}
                         to={"/dialogs"} activeClassName={styles.active}>
                    Сообщения</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link}
                         to={"/friends"} activeClassName={styles.active}>
                    Друзья</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link}
                         to={"/news"} activeClassName={styles.active}>
                    Новости</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link}
                         to={"/music"} activeClassName={styles.active}>
                    Музыка</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link}
                         to={"/photo"} activeClassName={styles.active}>
                    Фото</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link}
                         to={"/video"} activeClassName={styles.active}>
                    Видео</NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink className={styles.navbarItem__link}
                         to={"/settings"} activeClassName={styles.active}>
                    Настройки</NavLink>
            </div>
            <div className={styles.friendsOnline}>
                <FriendsOnlineContainer />
            </div>
        </nav>
    )
}

export default Navbar;
