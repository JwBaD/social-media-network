import myPostsModuleCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsData = [
        {
            id: 1,
            message: 'Its my first post',
            likesCount: 7
        },
        {
            id: 2,
            message: 'I like it!',
            likesCount: 46
        },
    ];

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;