import React from 'react';
import styles from './Post.module.css'


function Post({message}){
    return(
      
      <div className={styles.post}>
        <div className={styles.avatar}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png" alt="user"/>
        </div>
        <div className={styles.message}>
    <p>{message}</p>
        </div>
        <span>LIKE</span>
      </div>
    
    )
}

export default Post;