import React from "react"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPost from "./NewPost/NewPost";

const Profile = (props)=>{
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <NewPost addPost={props.addPost}/>
        <MyPosts photo={props.profile.photos.small} posts={props.posts} />
    </div>
};

export default Profile;