import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="some-image" />
            </div>
            <div>ava + description</div>
            <div>My posts</div>
            <div>New post</div>
            <div className={s.posts}>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>
        </div>
    );
}

export default Profile;