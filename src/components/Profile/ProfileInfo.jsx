import style from '../../styles/Profile/ProfileInfo.module.css';
import React from "react";

export default function ProfileInfo() {
    return (
        <div>
            <div className={style.picB}>
                <img className={style.picBimg}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg/1200px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg"
                     alt=""/>
            </div>
            <div className={style.post}>
                ava + desc
            </div>
        </div>

    )
}
