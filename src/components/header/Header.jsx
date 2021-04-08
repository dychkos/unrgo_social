import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


function Header(props){

    return(
        <header className={styles.header}>
        <div className={styles.logo}>
            <img src="https://img.icons8.com/flat_round/40/000000/share--v1.png" alt={"icon"}/>
        </div>
        <div className={styles.name}>
          <h1>UnReal GO <strong>React</strong></h1>
        </div>
            <div className={styles.login}>
                {
                    props.isAuth ?
                        <div>
                            <h2 className={styles.login_user_text}>{props.login}</h2>
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        :
                    <NavLink to={"/login"} style={{
                        textDecoration:"none",
                        color:"white",
                        margin:"12px",
                        fontSize:"20px"
                    }}>Login</NavLink>
                }
            </div>
      </header>
    )
}

export default Header;