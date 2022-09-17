import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="some-image" />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
}

export default Profile;