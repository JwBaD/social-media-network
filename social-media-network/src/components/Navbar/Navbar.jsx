import navbarModuleCss from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbarModuleCss.nav}>
            <div className={navbarModuleCss.item}>
                <div>Profile</div>
            </div>
            <div className={navbarModuleCss.item}>
                <div>Messages</div>
            </div>
            <div className={navbarModuleCss.item}>
                <div>News</div>
            </div>
            <div className={navbarModuleCss.item}>
                <div>Music</div>
            </div>
            <div className={navbarModuleCss.item}>
                <div>Settings</div>
            </div>
        </nav>
    );
}

export default Navbar;