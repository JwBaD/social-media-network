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
        }
    ];

    const postsDataMap = postsData
        .map(element => <Post message={element.message} likesCount={element.likesCount} />
    );


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
                {postsDataMap}
            </div>
        </div>
    );
}

export default MyPosts;