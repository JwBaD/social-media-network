import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <div>Profile</div>
            </div>
            <div className={s.item}>
                <div>Messages</div>
            </div>
            <div className={s.item}>
                <div>News</div>
            </div>
            <div className={s.item}>
                <div>Music</div>
            </div>
            <div className={s.item}>
                <div>Settings</div>
            </div>
        </nav>
    );
}

export default Navbar;