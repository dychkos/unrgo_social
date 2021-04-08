import React from 'react'
import ProfileStatus from "./ProfileStatus"
import styles from './Profile.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHook";

const ProfileInfo = (props) =>{

    return(

        <div className={styles.profile}>
          <img src={props.profile.photos.large ? props.profile.photos.large :"https://i.pinimg.com/564x/6f/8c/79/6f8c79fcbbe5cecd8db3065202da89a3.jpg" } alt="ava"/>
          <div className={styles.description}>
            <h2>{props.profile.fullName}</h2>
              <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
          </div>
        </div>
    )
};

export default ProfileInfo;