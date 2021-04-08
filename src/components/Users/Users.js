import React from "react"
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import {NavLink} from "react-router-dom";



let Users = (props) => {
     let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagination}>
            {pages.map(p => {

                return (
                    <span
                        style={{cursor: "pointer"}}
                        className={p === props.currentPage ? styles.currentPage : " "}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    >{p}</span>
                )
            })}
        </div>
        {
            props.users.map(user => {

                return (
                    <div className={styles.users} key={user.id}>
                        <span className={styles.col1}>
                            <div>
                                <NavLink to={`profile/${user.id}`}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="icon"
                                         className={styles.avatar}/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    user.followed
                                    ? <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                        props.unfollowThunkCreator(user.id);
                                        // props.toggleIsFollowing(true,user.id);
                                        // API.unfollow(user.id)
                                        //     .then((response) => {
                                        //     if(response.resultCode===0){
                                        //         props.unfollow(user.id);
                                        //     }
                                        //     props.toggleIsFollowing(false,user.id)
                                        //
                                        // });

                                    }} className={styles.btn + " " + styles.unfollow}>UNFOLLOW</button>
                                    :
                                    <button  disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                        props.followThunkCreator(user.id);
                                        // props.toggleIsFollowing(true,user.id);
                                        // API.follow(user.id)
                                        //     .then((response) => {
                                        //         if(response.resultCode===0){
                                        //             props.follow(user.id);
                                        //         }
                                        //         props.toggleIsFollowing(false,user.id);
                                        //
                                        //
                                        //     });

                                    }} className={styles.btn + " " + styles.follow}>FOLLOW</button>
                                }
                            </div>
                        </span>
                        <span className={styles.col2}>
                            <span>
                                <div className={styles.fullname}>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                        </span>
                        <span className={styles.col3}>
                                <div className={styles.city}>{"Город"}</div>
                                <div className={styles.country}>{"Страна"}</div>
                        </span>
                    </div>


                )
            })
        }

    </div>
};

export default Users;