import navbarModuleCss from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const active = navbarModuleCss.active;
const item = navbarModuleCss.item;
const nav = navbarModuleCss.nav;

const activeLink = ({isActive}) => isActive ? active : item;

const Navbar = () => {
    return (
        <nav className={nav}>
            <div className={item}>
                <NavLink to='/profile' className={activeLink}>Profile</NavLink>
            </div>
            <div className={item}>
                <NavLink to='/dialogs' className={activeLink}>Dialogs</NavLink>
            </div>
            <div className={item}>
                <NavLink to='/news' className={activeLink}>News</NavLink>
            </div>
            <div className={item}>
                <NavLink to='/music' className={activeLink}>Music</NavLink>
            </div>
            <div className={item}>
                <NavLink to='/settings' className={activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;