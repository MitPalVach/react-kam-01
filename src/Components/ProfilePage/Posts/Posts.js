import React from "react";
import Post from "../Post/Post";

import styles from './Posts.module.css'


const Posts = (props) => {

    let postsData = [
        {id: 1, message: 'Привет, как ты?', likeCount: 14},
        {id: 2, message: 'Я теперь тоже тут', likeCount: 21},
        {id: 3, message: 'Летал с друзьями', likeCount: 31},
        {id: 4, message: 'Приболел немного', likeCount: 24},
        {id: 5, message: 'А я новую шляпу купил', likeCount: 37},
        {id: 6, message: 'Была вчера в кафе "У сыча"', likeCount: 23},
        {id: 7, message: 'Сожрал 7 мышей, щаслопну', likeCount: 11},
        {id: 8, message: 'Мы с Филином помирились', likeCount: 33},
        {id: 9, message: 'Я влетел к вам', likeCount: 41}
    ]

    let postsElements = postsData.map(p => <Post id={p.id} likeCount={p.likeCount} message={p.message}/>);

    return (
        <div className={styles.posts}>
            {postsElements}
        </div>
    )
}

export default Posts;