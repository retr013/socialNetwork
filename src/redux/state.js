import {type} from "@testing-library/user-event/dist/type";

const types = Object.freeze(
    {
        addPost: 'ADD-POST',
        updatePost: 'UPDATE-NEW-POST-TEXT'
    },
)

let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message: 'My first post', likes: 14},
                {id:2, message: 'My second post', likes: 88},
                {id:3, message: 'My third post', likes: 228}
            ],
            newPostText: 'new message',
            dialogs: [
                {id:1, name: 'Max1'},
                {id:2, name: 'Max2'},
                {id:3, name: 'Max3'},
                {id:4, name: 'Max4'},
            ]
        },
        dialogsPage: {
            messages: [
                {id:1, message: 'Hello there1'},
                {id:2, message: 'Hello there2'},
                {id:3, message: 'Hello there3'}
            ]
        }
    },
    getState() {
        return this._state
    },
    rerender() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this.rerender = observer;
    },
    dispatch(action) {
        if (action.type === types.addPost) {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likes: 2};
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.rerender(this._state)
        }
        else if (action.type === types.updatePost) {
            this._state.profilePage.newPostText = action.text;
            this.rerender(this._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: types.addPost,
    }
}

export const updateNewPostTextActionCreator = (props) => {
    return {
        type: types.updatePost,
        text: props
    }
}

window.store = store;
export default store;