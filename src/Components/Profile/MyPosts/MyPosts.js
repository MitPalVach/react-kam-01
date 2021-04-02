import React from "react";
import Post from "./Post/Post";

import styles from './MyPosts.module.css'


const MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post id={p.id} likeCount={p.likeCount} message={p.message}/>);

    return (
        <div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;