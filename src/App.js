import React from 'react';
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

import styles from './App.module.css'


const App = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.app__wrapper}>
                <Header/>
                <Navbar friendsOnline={props.state.friendsOnline}/>
                <div className={styles.content__wrapper}>
                    <div className={styles.content__inner}>
                        <Route path='/profile'
                               render={() => <Profile state={props.state.profilePage}
                                                      dispatch={props.dispatch}/>}/>

                        <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

