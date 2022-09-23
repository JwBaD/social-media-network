import ProfileInfoModuleCss from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="some-image" />
            </div>
            <div className={ProfileInfoModuleCss.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;