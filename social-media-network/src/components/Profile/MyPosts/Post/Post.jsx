import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://pickaface.net/gallery/avatar/19242458_180728_2138_981a7j.png" alt="some-avatar" />
                {props.message}
                <div>
                    <span>
                        likes: {props.likesCount}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Post;