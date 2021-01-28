import React from 'react';
import styles from './header.module.css'

console.log(styles)


function Header(){
    return(
        <header className={styles.header}>
        <div className="logo">
            <img src="https://img.icons8.com/flat_round/40/000000/share--v1.png"/>
        </div>
        <div className="name">
          <h1>UnReal GO <strong>React</strong></h1>
        </div>      
      </header>
    )
}

export default Header;