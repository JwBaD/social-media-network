import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;