import React from 'react';
import styles from './Sidebar.module.css'

function Sidebar(){
    return(
        <section className={styles.sidebar}>
        <ul className={styles.navigation}>
          <li className={styles.item}>
            
            <a href="#">Profile</a>
          </li>
          <li className={styles.item}>
            <a href="#">Messages</a>
          </li>
          <li className={styles.item}>
            <a href="#">Friends</a>
          </li>
          <li className={styles.item}>
            <a href="#">Settings</a>
          </li>
        </ul>
      </section>
    )
}
export default Sidebar;