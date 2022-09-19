import headerModuleCss from './Header.module.css';

const header = headerModuleCss.header;

const Header = () => {
    return (
        <header className={header}>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/cd/fb/55/hi-my-name-is-emily-and.jpg" alt="alt-name" />
        </header>
    );
}

export default Header;