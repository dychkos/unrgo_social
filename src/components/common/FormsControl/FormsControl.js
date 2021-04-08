import React from 'react';
import styles from './FormsControl.module.css';



export let TextArea = ({input,meta,...props}) =>{
    const  hasError = meta.touched && meta.error;
  return (
         <div className={styles.formControl+" "+(hasError ?styles.error:"")}>
               <div>
                  <textarea {...input} {...props}/>
                </div>
               {hasError &&<span>{meta.error}</span>}
            </div>
        )

};

export let Input = ({input,meta,...props}) =>{
    const  hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl+" "+(hasError ?styles.error:"")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError &&<span>{meta.error}</span>}
        </div>
    )

};
