import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'

function Sidebar(){
    return(
        <section className={styles.sidebar}>
        <ul className={styles.navigation}>
          <li className={styles.item}>
            
            <NavLink to="/profile" activeClassName={styles.active}>Home</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink>
          </li>
          <li className={styles.item}>
              <NavLink to="/users" activeClassName={styles.active}>Friends</NavLink>
          </li>
          <li className={styles.item}>
            <a href="#">Settings</a>
          </li>
        </ul>
      </section>
    )
}
export default Sidebar;