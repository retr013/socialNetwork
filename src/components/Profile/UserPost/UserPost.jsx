import React from 'react';
import style from '../../../styles/Profile/UserPost/UserPost.module.css'

const UserPost = (props) => {
    return (
        <div className={style.item}>
            <img src="https://as1.ftcdn.net/v2/jpg/03/64/88/42/1000_F_364884228_JIux2brVPuxvpm7wmgShdUMWkOAQCsXM.jpg"
                 alt=""/>
            {props.message}
            <div>
                Like: {props.likes}
            </div>
        </div>
    );
};

export default UserPost;
