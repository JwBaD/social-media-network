import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    const newPostElement = React.createRef();
    const addPost = () => {
        const text = newPostElement.current.value;
        return props.addPost(text);
    }


    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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