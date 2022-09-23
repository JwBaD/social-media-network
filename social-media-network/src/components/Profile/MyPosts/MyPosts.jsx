import myPostsModuleCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            <div className={myPostsModuleCss.postsBlock}>
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
            <div className={myPostsModuleCss.posts}>
                <Post message="It's my first post" likesCount="20" />
                <Post message="Some text" likesCount="46" />
            </div>
        </div>
    );
}

export default MyPosts;