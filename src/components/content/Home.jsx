import React from 'react';
import styles from './Home.module.css'
import MyPosts from './MyPosts/MyPosts';
import Profile from './Profile/Profile';



function Home(props){

    let newPostElem = React.createRef();

    let addPost = ()=>{
        let text  = newPostElem.current.value;
        props.addPost(text);
        newPostElem.current.value=" ";
    }
    let onPostChange=()=>{
        let text  = newPostElem.current.value;
        props.updateNewPostText(text);
    }

    return(
      <div>
        <Profile />
        <div className={styles.addpost}>

          <textarea ref={newPostElem} onChange={onPostChange} value={props.newPostText} name="newpost" id="newpost" cols="80" rows="5"/>
          <button onClick={addPost}>ADD</button>
        </div>
        <MyPosts posts={props.posts} />
      </div>
    )
}

export default Home;