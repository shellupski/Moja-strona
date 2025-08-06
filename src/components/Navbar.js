import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const linksContainerRef = useRef(null);
    const [lang, setLang] = useState('pl'); // 'pl' lub 'en'

    const handleMouseEnter = (e) => {
        const el = e.currentTarget;
        const container = linksContainerRef.current;
        if (container) {
            const { left, width } = el.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            container.style.setProperty('--pill-left', `${left - containerRect.left}px`);
            container.style.setProperty('--pill-width', `${width}px`);
            container.style.setProperty('--pill-opacity', '1');
        }
    };

    const handleMouseLeave = () => {
        const container = linksContainerRef.current;
        if (container) {
            container.style.setProperty('--pill-opacity', '0');
        }
    };

    // Funkcja do zmiany języka
    const handleLangChange = (newLang) => {
        setLang(newLang);
        // Tu w przyszłości możesz dodać obsługę tłumaczeń (np. i18next.changeLanguage)
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">Crusty IT</NavLink>
            </div>

            <ul
                className="navbar-links"
                ref={linksContainerRef}
                onMouseLeave={handleMouseLeave}
            >
                {navItems.map((item) => (
                    <li key={item.to} onMouseEnter={handleMouseEnter}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            end={item.to === '/'}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="navbar-lang-switcher">
                <button
                    className={lang === 'pl' ? 'active' : ''}
                    onClick={() => handleLangChange('pl')}
                >
                    PL
                </button>
                <span style={{ margin: '0 4px', color: '#aaa' }}>|</span>
                <button
                    className={lang === 'en' ? 'active' : ''}
                    onClick={() => handleLangChange('en')}
                >
                    EN
                </button>
            </div>
        </nav>
    );
};

export default Navbar;