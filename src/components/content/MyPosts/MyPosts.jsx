import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


function MyPosts(props){


    let postsRender=props.posts.map(post=><Post message={post.message}/>);
    return(
      <div className={styles.posts}>
          {postsRender}

    </div>
    )
}

export default MyPosts;