import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsOnline: sidebarReducer,
    friendsPage: friendsReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;




































