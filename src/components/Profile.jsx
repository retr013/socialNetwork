import React from 'react';
import style from '../styles/Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.picB}>
                <img className='picB-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg/1200px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg" alt=""/>
            </div>
            <div className={style.post}>
                ava + desc
            </div>
            <div className={style.post}>
                my posts
                <div className={style.post}>new post</div>
                <div className={style.post}>post1</div>
                <div className={style.post}>post2</div>
            </div>
        </div>
    );
};

export default Profile;
