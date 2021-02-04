import React from 'react'
import styles from './Dialog.module.css'



const Dialog = ({text}) =>{
    return(
        <div className={styles.dialog}>
            {text}
        </div>
    )
}

export default Dialog;
