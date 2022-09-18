import navbarModuleCss from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbarModuleCss.nav}>
            <div className={navbarModuleCss.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={navbarModuleCss.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={navbarModuleCss.item}>
                <a href='/news'>News</a>
            </div>
            <div className={navbarModuleCss.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={navbarModuleCss.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;