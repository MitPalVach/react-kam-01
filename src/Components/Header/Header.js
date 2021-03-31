import React from "react";

import styles from './Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.headerLogo} src='https://img.icons8.com/ios/452/owl.png'
                 alt="logo"/>
            <h1 className={styles.headerTitle}>owlbook.com</h1>
        </header>
    )
}

export default Header;