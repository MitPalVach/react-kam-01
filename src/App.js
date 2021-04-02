import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Messages/Dialogs/Dialogs";

import styles from './App.module.css'


const App = (props) => {

    return (
        <Router>
            <div className={styles.container}>
                <div className={styles.app__wrapper}>
                    <Header/>
                    <Navbar/>
                    <div className={styles.content__wrapper}>
                        <div className={styles.content__inner}>
                            <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
                            <Route path='/dialogs' render={() => <Dialogs dialogItemsData={props.dialogItemsData}
                                                                          dialogMessagesData={props.dialogMessagesData}/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}


export default App;

