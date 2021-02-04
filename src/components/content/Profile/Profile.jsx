import React from 'react'
import styles from './Profile.module.css'

const Profile = () =>{
    return(
        <div className={styles.profile}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png" alt="ava"/>
          <div className={styles.description}>
            <h2>Sergey Dychko</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque reprehenderit quaerat ducimus! In illum dolorem deleniti quod a. Quae!</p>
          </div>
        </div>
    )
}

export default Profile;