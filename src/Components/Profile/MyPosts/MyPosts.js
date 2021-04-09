import styles from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.profilePage.map(p => <Post
        id={p.id} key={p.id}
        likeCount={p.likeCount} message={p.message}/>);

    return (
        <div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;