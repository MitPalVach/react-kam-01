import './index.css';
// import mongoose from 'mongoose';
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {Provider} from "react-redux";


// mongoose.connect('mongodb://localhost/owls-db');

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});


