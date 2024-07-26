import { HashLink as Link } from 'react-router-hash-link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import './footer.scss';
import './footer-media.scss';

export default function Footer() {
    return (
        <section className="footer-section">
            <div className="left-side">
                <div className="information">
                    <span className="logo">LOGO</span>
                    <span className="contactMe"> Here are my contact details, I would be glad if you reach out.</span>
                    {/* <span>Telephone +972</span> */}
                </div>
                <div className="social-media">
                    <Link className="linkedIn icon"><FaLinkedin/></Link>
                    <Link className="gitNub icon"><FaGithub/></Link>
                    <Link className="telegram icon"><FaTelegram/></Link>
                </div>
            </div>
            <div className="right-side">
                <div className="nav_bar_column">
                    <div className="list">
                        <span>Menu</span>
                        <Link smooth to="#greetings" className="link">Home</Link>
                        <Link smooth to="#works" className="link">Works</Link>
                        <Link smooth to="#skills" className="link">Portfolio</Link>
                        <Link smooth to="#about" className="link">About</Link>
                    </div>
                </div>
            </div>

        </section>
    )
}