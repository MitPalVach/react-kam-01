import styles from './Friends.module.css';
import React from "react";
import * as axios from "axios";


class Friends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                // axios.get("").then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalFriendsCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                // axios.get("").then(response => {
                this.props.setFriends(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectedPage}
                                     onClick={()=>{ this.onPageChanged(p) }}>{p}</span>
                    })}

                </div>
                {
                    this.props.friends.map(f => <div key={f.id}>
                        <div className={styles.friendsWrapper}>
                            <div className={styles.friends__leftSide}>
                                <img className={styles.friendsPhoto}
                                     src={f.photoUrl != null ? f.photoUrl : 'img/none_ava.svg'}
                                     alt={f.fullName}/>
                                <div>
                                    {f.followed ?
                                        <button className={styles.friendsBtn}
                                                onClick={() => {
                                                    this.props.unfollow(f.id)
                                                }}>Отписаться</button> :
                                        <button className={styles.friendsBtn}
                                                onClick={() => {
                                                    this.props.follow(f.id)
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
}


export default Friends;