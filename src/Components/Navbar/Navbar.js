import React from "react";

import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarItem} ${styles.active}`}>
                <a href="#">Профиль</a>
            </div>
            <div className={styles.navbarItem}>
                <a href="#">Друзья</a>
            </div>
            <div className={styles.navbarItem}>
                <a href="#">Сообщения</a>
            </div>
            <div className={styles.navbarItem}>
                <a href="#">Новости</a>
            </div>
            <div className={styles.navbarItem}>
                <a href="#">Музыка</a>
            </div>
            <div className={styles.navbarItem}>
                <a href="#">Фото</a>
            </div>
            <div className={styles.navbarItem}>
                <a href="#">Видео</a>
            </div>
            <div className={styles.navbarItem}>
                <a href="#">Настройки</a>
            </div>
        </nav>
    )
}

export default Navbar;
