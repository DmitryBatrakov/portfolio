import bracerRight from '../../images/bracerRight.svg';
import bracerLeft from '../../images/bracerLeft.svg';
import './aboutMe.scss';
import './aboutMe-media.scss';
import myEmoji from '../../images/hello.PNG';

export default function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="left-side">
                <div className="text">
                    <strong>About Me</strong>
                    <span>My name is Dmitry </span>
                    <span>
                        I am passionate about information and constantly
                        tuned into news about science, technology, economics,
                        and other topics involving the world both inside and outside of Brazil.
                        I follow debates on social causes, philosophy, sociology, and history.
                    </span>
                </div>
            </div>
            <div className="right-side">
                <div className="pictures">
                    <div className="sectionBracerRight">
                        <img src={bracerRight} alt="arrow" className="bracerRight" />
                    </div>
                    <div className="myPhoto">
                        <img src={myEmoji} alt="my Photo" className="myEmoji" />
                    </div>
                    <div className="sectionBracerLeft">
                        <img src={bracerLeft} alt="arrow" className="bracerLeft" />
                    </div>
                </div>
            </div>
        </section>
    )
}