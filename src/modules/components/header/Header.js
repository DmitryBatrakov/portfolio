import './header.scss';
import './header-media.scss';
import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShrink, setIsShrink] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsShrink(true)
        } else {
            setIsShrink(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen === true) {
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="nav_bar">
            <nav className="desktop-menu">
                <Link smooth to="#greetings" className="link">LOGO</Link>
                <Link smooth to="#works" className="link">works</Link>
                <Link smooth to="#skills" className="link">portfolio</Link>
                <Link smooth to="#about" className="link">about</Link>
                <Link smooth to="#contact" className="link">contact</Link>
            </nav>
            <div className={`burger-menu ${isShrink ? 'shrink' : ''}`} onClick={toggleMenu}>
                <Link smooth to="#greetings" className="link">LOGO</Link>
                <div className="burger-button-section">
                    <div className={`burger-button ${isMenuOpen ? 'open' : ''}`}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div>
                    <div className="overlay" onClick={toggleMenu}></div>
                    <div className={`nav_menu ${isShrink ? 'shrink' : ''}`}>
                        <Link smooth to="#works" className="link" onClick={toggleMenu}>works</Link>
                        <Link smooth to="#skills" className="link" onClick={toggleMenu}>portfolio</Link>
                        <Link smooth to="#about" className="link" onClick={toggleMenu}>about</Link>
                        <Link smooth to="#contact" className="link" onClick={toggleMenu}>contact</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
