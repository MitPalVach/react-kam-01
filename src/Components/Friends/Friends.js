import styles from "./Friends.module.css";
import React from "react";


let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.fff}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p && styles.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.friends.map(f => <div key={f.id}>
                    <div className={styles.friendsWrapper}>
                        <div className={styles.friends__leftSide}>
                            <img className={styles.friendsPhoto}
                                 src={f.photoUrl != null ? f.photoUrl : 'img/none_ava.svg'}
                                 alt={f.fullName}/>
                            <div>
                                {f.followed
                                    ? <button className={styles.friendsBtn}
                                              onClick={() => {
                                                  props.unfollow(f.id)
                                              }}>Отписаться</button>
                                    : <button className={styles.friendsBtn}
                                              onClick={() => {
                                                  props.follow(f.id)
                                              }}>Подписаться</button>}
                            </div>
                        </div>
                        <div className={styles.friends__rightSide}>
                            <div>
                                <div>{f.name}</div>
                                <div>{f.id}</div>
                                {/*<div>{f.status}</div>*/}
                                {/*<div>{f.fullName}</div>*/}
                                {/*<div>{f.status}</div>*/}
                            </div>
                            <div>
                                {/*<div>{f.location.country}</div>*/}
                                {/*<div>{f.location.city}</div>*/}
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Friends;