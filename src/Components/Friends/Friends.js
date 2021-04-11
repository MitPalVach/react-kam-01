import styles from './Friends.module.css';
import React from "react";
import * as axios from "axios";


class Friends extends React.Component {

    constructor(props) {
        super(props);
        axios.get("").then(response => {
            this.props.setFriends(response.data.items)
        });
    }

    render() {
        return (
            <div>
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
                                    <div>{f.fullName}</div>
                                    <div>{f.status}</div>
                                </div>
                                <div>
                                    <div>{f.location.country}</div>
                                    <div>{f.location.city}</div>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        )
    }

}


export default Friends;