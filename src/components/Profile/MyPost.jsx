import React from 'react';
import style from '../../styles/Profile/MyPost.module.css'
import UserPost from "./UserPost/UserPost";
import {type} from "@testing-library/user-event/dist/type";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";



function MyPost(props) {

    let postElements = props.postData.map(
        post => <UserPost message={post.message} likes={post.likes}/>
    )

    let newPostElement = React.createRef()

    let addPost = () => {
        // we generate new list of elements via post elements function and put is as inner html of posts div
        // let text = newPostElement.current.value;
        let action = addPostActionCreator()
        props.dispatch(action)
    }

    function onPostChange() {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={style.post}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea name="" value={props.newPostText} onChange={onPostChange} ref={newPostElement} cols="10" rows="2"/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            { postElements }
        </div>
    );
};

export default MyPost;
