import './header.scss';
import { Link } from 'react-router-dom';
import React from 'react'

export default function Header() {
    return (
        <header className="nav_bar">  
                <Link to="/"><span>LOGO</span></Link>
                <Link to="works"><span>works</span></Link>
                <Link to="portfolio"><span>portfolio</span></Link>
                <Link to="/about"><span>about</span></Link>
                <Link to="contact"><span>contact</span></Link>    
        </header>
    )
};
