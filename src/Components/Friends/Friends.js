import styles from "./Friends.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                                    ? <button disabled={props.followingInProgress.some(id => id === f.id)}
                                              className={styles.friendsBtn}
                                              onClick={() => {
                                                  props.toggleFollowingProgress(true, f.id);
                                                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`, {
                                                      withCredentials: true,
                                                      headers: {
                                                          "API-KEY": "753806ff-2793-4166-a0d1-260ed16b9c6e"
                                                      }
                                                  })
                                                      .then(response => {
                                                          if (response.data.resultCode === 0) {
                                                              props.unfollow(f.id)
                                                          }
                                                          props.toggleFollowingProgress(false, f.id);
                                                      });
                                              }}>Отписаться</button>
                                    : <button disabled={props.followingInProgress.some(id => id === f.id)}
                                              className={styles.friendsBtn}
                                              onClick={() => {
                                                  props.toggleFollowingProgress(true, f.id);
                                                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`, {}, {
                                                      withCredentials: true,
                                                      headers: {
                                                          "API-KEY": "753806ff-2793-4166-a0d1-260ed16b9c6e"
                                                      }
                                                  })
                                                      .then(response => {
                                                          if (response.data.resultCode === 0) {
                                                              props.follow(f.id)
                                                          }
                                                          props.toggleFollowingProgress(false, f.id);
                                                      });
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