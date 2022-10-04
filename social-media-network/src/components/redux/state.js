import {rerenderEntireTree} from '../../render.js';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Its my first post', likesCount: 7},
            {id: 2, message: 'I like it!', likesCount: 46},
            {id: 3, message: 'Show me my link', likesCount: 32},
            {id: 4, message: 'So cool!', likesCount: 66}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'UserName1'},
            {id: 2, name: 'UserName2'},
            {id: 3, name: 'UserName3'},
            {id: 4, name: 'UserName4'},
            {id: 5, name: 'UserName5'},
            {id: 6, name: 'UserName6'}
        ],
        messages: [
            {id: 1, message: 'Are you good?'},
            {id: 2, message: 'How are you, bro?'},
            {id: 3, message: 'Hi. Its you?'},
            {id: 4, message: 'Hi. Its me!'},
            {id: 5, message: 'whats up?, bro?'},
            {id: 6, message: 'Im doing great!'}
        ]
    }
};

export const addPost = () => {
    const newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;