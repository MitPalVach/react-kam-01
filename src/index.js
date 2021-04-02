import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialogs from "./Components/Messages/Dialogs/Dialogs";


let postsData = [
    {id: 1, message: 'Привет, как ты?', likeCount: 14},
    {id: 2, message: 'Я теперь тоже тут', likeCount: 21},
    {id: 3, message: 'Летал с друзьями', likeCount: 31},
    {id: 4, message: 'Приболел немного', likeCount: 24},
    {id: 5, message: 'А я новую шляпу купил', likeCount: 37},
    {id: 6, message: 'Была вчера в кафе "У сыча"', likeCount: 23},
    {id: 7, message: 'Сожрал 7 мышей, щас лопну', likeCount: 11},
    {id: 8, message: 'Мы с Филином помирились', likeCount: 33},
    {id: 9, message: 'Я влетел к вам', likeCount: 41}
]

let dialogItemsData = [
    {id: 1, name: 'Неясыть'},
    {id: 2, name: 'Филин'},
    {id: 3, name: 'Полярная сова'},
    {id: 4, name: 'Обыкновенная сипуха'},
    {id: 5, name: 'Рыбный филин'},
    {id: 6, name: 'Ушастая сова'},
    {id: 7, name: 'Ястребиная сова'},
    {id: 8, name: 'Иглоногая сова'},
    {id: 9, name: 'Совка-сплюшка'}
]

let dialogMessagesData = [
    {id: 1, message: 'Привет, погнали мышей заточим?'},
    {id: 2, message: 'Здарова, как дел?'},
    {id: 3, message: 'Не пиши мне больше!!!'},
    {id: 4, message: 'Куда летал вчера?'},
    {id: 5, message: 'Слетаем к сычу?'},
]


ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogItemsData={dialogItemsData}
             dialogMessagesData={dialogMessagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
