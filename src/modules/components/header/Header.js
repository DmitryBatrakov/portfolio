// import './header.scss';
// import { Link } from 'react-router-dom';
// import React from 'react'

// export default function Header() {
//     return (
//         <header className="nav_bar">  
//                 <Link to="/" className="link"><span>LOGO</span></Link>
//                 <Link to="works" className="link"><span>works</span></Link>
//                 <Link to="portfolio" className="link"><span>portfolio</span></Link>
//                 <Link to="/about" className="link"><span>about</span></Link>
//                 <Link to="contact" className="link"><span>contact</span></Link>    
//         </header>
//     )
// };

// Header.js
import './header.scss';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
    return (
        <header className="nav_bar">
            <Link smooth to="#greetings" className="link">LOGO</Link>
            <Link smooth to="#works" className="link">works</Link>
            <Link smooth to="#skills" className="link">portfolio</Link>
            <Link smooth to="#about" className="link">about</Link>
            <Link smooth to="#contact" className="link">contact</Link>
        </header>
    );
}
