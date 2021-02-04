import React from 'react'
import styles from './UserMessage.module.css'
import {NavLink} from "react-router-dom";


const UserMessage = (prompt) =>{
    let linkTO = `/messages/${prompt.id}`
    return(
        <div>
           <div className={styles.users}>
               <div className={styles.user}>
                   <NavLink activeClassName={styles.active} to={linkTO}>{prompt.name}</NavLink>
               </div>
           </div>
        </div>
    )
}

export default UserMessage;
