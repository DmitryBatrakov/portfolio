import './header.scss';
import './header-media.scss';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Импортируем Link из react-scroll

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShrink, setIsShrink] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsShrink(true);
        } else {
            setIsShrink(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="nav_bar">
            <nav className="desktop-menu">
                <ScrollLink
                    to="header"
                    smooth={true}
                    className="link"
                >
                    LOGO
                </ScrollLink>
                <ScrollLink
                    to="works"
                    smooth={true}
                    className="link"
                >
                    works
                </ScrollLink>
                <ScrollLink
                    to="skills"
                    smooth={true}
                    offset={-100}
                    className="link"
                >
                    portfolio
                </ScrollLink>
                <ScrollLink
                    to="about"
                    smooth={true}
                    offset={-100}
                    className="link"
                >
                    about
                </ScrollLink>
                <ScrollLink
                    to="contact"
                    smooth={true}
                    className="link"
                >
                    contact
                </ScrollLink>
            </nav>
            <div className={`burger-menu ${isShrink ? 'shrink' : ''}`} >
                <ScrollLink to="greetings" smooth={true} className="link">LOGO</ScrollLink>
                <div className="burger-button-section">
                    <div className={`burger-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
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
                        <ScrollLink
                            to="works"
                            smooth={true}
                            className="link"
                            onClick={toggleMenu}
                            offset={-50}
                        >
                            works
                        </ScrollLink>
                        <ScrollLink
                            to="skills"
                            smooth={true}
                            className="link"
                            onClick={toggleMenu}
                            offset={-50}
                        >
                            portfolio
                        </ScrollLink>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            className="link"
                            onClick={toggleMenu}
                            offset={-60}
                        >
                            about
                        </ScrollLink>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            className="link"
                            onClick={toggleMenu}
                        >
                            contact
                        </ScrollLink>
                    </div>
                </div>
            )}
        </header>
    );
}
