import s from './Post.module.css';

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_QL75_UY281_CR86,0,500,281_.jpg" alt="some-avatar" />
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;