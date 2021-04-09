import styles from './App.module.css'
import React from 'react';
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.app__wrapper}>
                <Header/>
                <Navbar />
                <div className={styles.content__wrapper}>
                    <div className={styles.content__inner}>
                        <Route path='/profile' render={() => <Profile />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

