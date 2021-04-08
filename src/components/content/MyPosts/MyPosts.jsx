import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts=React.memo(props=>{
    console.log("RENDER YOU");
    let postsRender=props.posts.map(post=><Post key={post.id} photo={props.photo} message={post.message}/>);
    return(
      <div className={styles.posts}>
          {postsRender}

    </div>
    )
});

export default MyPosts;