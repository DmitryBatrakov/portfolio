import Button from "../button/Button";
import bracerLeft from '../../images/iconGreenBracerLeft.svg';
import bracerRight from '../../images/iconGreenBracerRight.svg';
import iconPeople from '../../images/iconPeople.svg';
import iconMessage from '../../images/iconMessage.svg';
import iconSquares from '../../images/iconThreeSquares.svg';
import myEmoji from '../../images/smileWithEye.PNG';
import './greetings.scss';
import './greetings-media.scss';
import CodeString from "./greetings-data/CodeString";
import { codeString } from "./greetings-data/GreetingsData";
import DownloadButton from "../download-button/DownloadButton";

export default function Greetings() {

    const buttonContext = '</contact>';

    return (
        <section className="greetings-section">
            <div className="wrapper-top">
                <div className="left-side">
                    <div className="name">
                        <h1 className="myName">Dmitry Batrakov</h1>
                        <DownloadButton />
                    </div>
                    <div className="frontEnd">
                        <span className="item1">Developer {`{`}</span>
                        <span className="item2">Front End {`}`}</span>
                    </div>
                    <Button
                        to="#contact"
                    >
                        {buttonContext}
                    </Button>
                    <div className="bottom-section">
                        <div className="emoji-section">
                            <div className="bracerRight">
                                <img src={bracerRight} alt="" />
                            </div>
                            <div className="myEmoji">
                                <img src={myEmoji} alt="" />
                            </div>
                            <div className="bracerLeft">
                                <img src={bracerLeft} alt="" />
                            </div>
                        </div>
                        <div className="icons">
                            <div className="squares">
                                <img src={iconSquares} alt="" />
                            </div>
                            <div className="peopleAndMessage">
                                <img src={iconMessage} alt="" className="iconMessage" />
                                <img src={iconPeople} alt="" className="iconPeople" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="squares">
                        <div className="top-square">
                            <div className="circle green"></div>
                            <div className="circle blue"></div>
                            <div className="circle purple"></div>
                        </div>
                        <div className="bottom-square">
                            <CodeString codeString={codeString} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}