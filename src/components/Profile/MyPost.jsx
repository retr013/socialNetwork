import React from 'react';
import style from '../../styles/Profile/MyPost.module.css'
import UserPost from "./UserPost/UserPost";

const MyPost = () => {
    return (
        <div className={style.post}>
            My posts
            <div>
                <textarea name="" id="" cols="10" rows="2"></textarea>
                <button>Add post</button>
            </div>
            <UserPost message='Hello, world' likes='14'/>
            <UserPost message='Privet vsem' likes='88'/>
        </div>
    );
};

export default MyPost;
