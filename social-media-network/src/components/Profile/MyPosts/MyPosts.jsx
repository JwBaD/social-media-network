import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="It's my first post" likesCount="20" />
                <Post message="Some text" likesCount="46" />
            </div>
        </div>
    );
}

export default MyPosts;