import navbarModuleCss from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const activeLink = ({isActive}) => isActive ? navbarModuleCss.active : navbarModuleCss.item;

const Navbar = () => {
    return (
        <nav className={navbarModuleCss.nav}>
            <div className={navbarModuleCss.item}>
                <NavLink to='/profile' className={activeLink}>Profile</NavLink>
            </div>
            <div className={navbarModuleCss.item}>
                <NavLink to='/dialogs' className={activeLink}>Messages</NavLink>
            </div>
            <div className={navbarModuleCss.item}>
                <NavLink to='/news' className={activeLink}>News</NavLink>
            </div>
            <div className={navbarModuleCss.item}>
                <NavLink to='/music' className={activeLink}>Music</NavLink>
            </div>
            <div className={navbarModuleCss.item}>
                <NavLink to='/settings' className={activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;