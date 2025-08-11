import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const LOGO_URL = 'https://raw.githubusercontent.com/shellupski/Moja-strona/main/images/logo(1).svg';

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
    const [lang, setLang] = useState('pl');
    const location = useLocation();

    const setPillToElement = (el) => {
        const container = linksContainerRef.current;
        if (!container || !el) return;
        const containerRect = container.getBoundingClientRect();
        const { left, width } = el.getBoundingClientRect();
        container.style.setProperty('--pill-left', `${left - containerRect.left}px`);
        container.style.setProperty('--pill-width', `${width}px`);
        container.style.setProperty('--pill-opacity', '1');
    };

    const setPillToActive = () => {
        const container = linksContainerRef.current;
        if (!container) return;
        const active = container.querySelector('a.active');
        if (active) setPillToElement(active);
        else container.style.setProperty('--pill-opacity', '0');
    };

    const handleMouseEnter = (e) => {
        const link = e.currentTarget.querySelector('a');
        if (link) setPillToElement(link);
    };

    const handleMouseLeave = () => setPillToActive();
    const handleLangChange = (newLang) => setLang(newLang);

    useEffect(() => { setPillToActive(); }, [location.pathname]);
    useEffect(() => {
        const onResize = () => setPillToActive();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <header className="main-header">
            <div className="header-logo">
                <NavLink to="/" className="logo-link" aria-label="Crusty IT — Home">
                    <img
                        src={LOGO_URL}
                        alt="Crusty IT — logo"
                        height="40"
                        loading="eager"
                        decoding="async"
                        draggable="false"
                    />
                </NavLink>
            </div>

            <nav
                className="main-nav"
                ref={linksContainerRef}
                onMouseLeave={handleMouseLeave}
            >
                <ul>
                    {navItems.map((item) => (
                        <li key={item.to} onMouseEnter={handleMouseEnter}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                end={item.to === '/'}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="header-lang-switcher">
                <button className={lang === 'pl' ? 'active' : ''} onClick={() => handleLangChange('pl')}>PL</button>
                <span>|</span>
                <button className={lang === 'en' ? 'active' : ''} onClick={() => handleLangChange('en')}>EN</button>
            </div>
        </header>
    );
};

export default Navbar;