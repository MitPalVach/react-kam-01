import styles from "./Friends.module.css";
import React from "react";
import {NavLink} from "react-router-dom";


let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.unshift(i);
    }

    return (
        <div className={styles.friendsInner}>
            <div className={styles.pagination}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? styles.paginationSelect : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.friends.map(f => <div key={f.id}>
                    <div className={styles.friendsWrapper}>
                        <div className={styles.friends__leftSide}>
                            <NavLink to={'/profile/' + f.id}>
                                <img className={styles.friendsPhoto}
                                     src={f.photos.large != null ? f.photos.large : 'img/none_ava.svg'}
                                     alt={f.fullName}/>
                            </NavLink>
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
                                <div>{f.status}</div>
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