import React from "react";

import styles from './Friends.module.css';


const Friends = (props) => {

    if (props.friends.length === 0) {
        props.setFriends(
            [
                {
                    id: 1,
                    followed: true,
                    fullName: 'Неясыть',
                    status: 'Спасибо, я сыт!',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/sova-neyasyt.jpeg'
                },
                {
                    id: 2,
                    followed: false,
                    fullName: 'Филин',
                    status: 'Я ленивая жопа',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/filin.jpeg'
                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'Полярная сова',
                    status: 'Холодно, пздц',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/polyarnaya-belaya-sova.jpeg'
                },
                {
                    id: 4,
                    followed: false,
                    fullName: 'Обыкновенная сипуха',
                    status: 'Самая обыкновенная сипуха',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/sipuha.jpeg'
                },
                {
                    id: 5,
                    followed: false,
                    fullName: 'Рыбный филин',
                    status: 'Люблю совят и рыбку',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/rybniy-filin.jpeg'
                },
                {
                    id: 6,
                    followed: true,
                    fullName: 'Ушастая сова',
                    status: 'Меня штырит!!!',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/ushastaya-sova.jpeg'
                },
                {
                    id: 7,
                    followed: true,
                    fullName: 'Ястребиная сова',
                    status: 'HawkEye',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/yastrebinnaya-sova.jpeg'
                },
                {
                    id: 8,
                    followed: false,
                    fullName: 'Иглоногая сова',
                    status: 'Я колючка',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/iglononogaya-sova.jpeg'
                },
                {
                    id: 9,
                    followed: true,
                    fullName: 'Совка-сплюшка',
                    status: 'Спать хочу',
                    location: {city: 'Казань', country: 'Россия'},
                    photoUrl: 'img/friends_avatars/sovka-splushka.jpeg'
                }
            ]
        )
    }


    return (
        <div>
            {props.friends.map(f => <div key={f.id}>
                <div className={styles.friendsWrapper}>
                    <div className={styles.friends__leftSide}>
                        <img className={styles.friendsPhoto} src={f.photoUrl}/>
                        <div>
                            {f.followed ?
                                <button className={styles.friendsBtn}
                                        onClick={() => {
                                            props.unfollow(f.id)
                                        }}
                                >Отписаться</button> :
                                <button className={styles.friendsBtn}
                                        onClick={() => {
                                            props.follow(f.id)
                                        }}
                                >Подписаться</button>
                            }

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

export default Friends;