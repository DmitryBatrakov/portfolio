import { HashLink as Link } from 'react-router-hash-link';
import './footer.scss';
import './footer-media.scss';

export default function Footer() {
    return (
        <section className="footer-section">
            <div className="left-side">
                <div className="information">
                    <span className="logo">LOGO</span>
                    <span >dslknflks ds kfldknf ln</span>
                    {/* <span>Telephone +972</span> */}
                </div>
                <div className="social-media">
                    <img src="" alt="linkedIn" />
                    <img src="" alt="gitHub" />
                    <img src="" alt="whatsApp" />
                    <img src="" alt="Telegram" />
                </div>
            </div>
            <div className="right-side">
                <div className="nav_bar_column">
                    <div className="list">
                        <span>Menu</span>
                        <Link smooth to="#greetings" className="link"><li>Home</li></Link>
                        <Link smooth to="#works" className="link">works</Link>
                        <Link smooth to="#skills" className="link">portfolio</Link>
                        <Link smooth to="#about" className="link">about</Link>
                    </div>
                </div>
            </div>

        </section>
    )
}