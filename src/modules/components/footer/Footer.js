import { HashLink as Link } from 'react-router-hash-link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import './footer.scss';
import './footer-media.scss';



export default function Footer() {

    const urlLinkedIn = 'https://www.linkedin.com/in/dmitry-batrakov/';
    const urlGitHub = 'https://github.com/DmitryBatrakov?tab=repositories';
    const urlTelegram = 'https://t.me/batrs001';

    return (
        <section className="footer-section">
            <div className="left-side">
                <div className="information">
                    <span className="logo">LOGO</span>
                    <span className="contactMe"> Here are my contact details, I would be glad if you reach out.</span>
                </div>
                <div className="social-media">
                    <Link className="linkedIn icon" to={urlLinkedIn} target="_blank"><FaLinkedin/></Link>
                    <Link className="gitNub icon" to={urlGitHub} target="_blank"><FaGithub/></Link>
                    <Link className="telegram icon" to={urlTelegram} target="_blank"><FaTelegram/></Link>
                </div>
            </div>
            <div className="right-side">
                <div className="nav_bar_column">
                    <div className="list">
                        <span>Menu</span>
                        <Link smooth to="#header" className="link" >Home</Link>
                        <Link smooth to="#works" className="link">Works</Link>
                        <Link smooth to="#skills" className="link">Portfolio</Link>
                        <Link smooth to="#about" className="link">About</Link>
                    </div>
                </div>
            </div>

        </section>
    )
}