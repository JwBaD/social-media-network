import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    const newPostElement = React.createRef();
    const addPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;