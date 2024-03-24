import React from 'react';
import style from '../../styles/Profile/Profile.module.css'
import MyPost from "./MyPost";
import ProfileInfo from "./ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}/>
        </div>
    );
};

export default Profile;
