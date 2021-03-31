import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/ProfilePage/Profile/Profile";
import Dialogs from "./Components/Messages/Dialogs/Dialogs";


import styles from './App.module.css'


const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.app__wrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.content__wrapper}>
                    <div className={styles.content__inner}>
                        {/*<Profile/>*/}
                        <Dialogs/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;


// картинки с диска
// зачем реакт, а как эе верстка
// классы хтмл без бэма