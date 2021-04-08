import React from 'react';
import styles from './Post.module.css'


function Post(props){

    return(
      
      <div className={styles.post}>
        <div className={styles.avatar}>
          <img src={props.photo?props.photo:"https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png"} alt="user"/>
        </div>
        <div className={styles.message}>
    <p>{props.message}</p>
        </div>
        <span className={styles.like}>LIKE</span>
      </div>
    
    )
}

export default Post;