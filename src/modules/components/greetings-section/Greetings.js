// import { useState } from "react";
import Button from "../button/Button";
import Header from "../header/Header";
import bracerLeft from '../../images/iconGreenBracerLeft.svg';
import bracerRight from '../../images/iconGreenBracerRight.svg';
import iconPeople from '../../images/iconPeople.svg';
import iconMessage from '../../images/iconMessage.svg';
import iconSquares from '../../images/iconThreeSquares.svg';
import myEmoji from '../../images/smileWithEye.PNG';
import './greetings.scss';
import './greetings-media.scss';

export default function Greetings({ }) {

    const buttonContext = '</contact>';

    return (
        <section className="greetings-section">
            <Header />
            <div className="wrapper-top">
                <div className="left-side">
                    <h1 className="myName">Dmitry Batrakov</h1>
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
                            <div className="front-block">
                                <code>
                                    <span>body &#123;</span><br />
                                    <span>&nbsp;&nbsp;background:</span> <br />
                                    <span>&nbsp;&nbsp;linear-gradient(127deg,</span> <br />
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgb(2, 255, 238), rgb(154, 24, 253) 85.71%),</span><br />
                                    <span>&nbsp;&nbsp;linear-gradient(90deg,</span> <br />
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgb(4, 247, 113), rgb(4, 247, 113) 20.71%),</span><br />
                                    <span>&nbsp;&nbsp;linear-gradient(336deg,</span> <br />
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgb(0, 255, 102), rgb(2, 255, 238) 85.71%);</span><br />
                                    <span>&#125;</span>
                                </code>
                            </div>
                            <div className="rear-block">
                                <code>
                                    <span>body &#123;</span><br />
                                    <span>&nbsp;&nbsp;background:</span> <br />
                                    <span>&nbsp;&nbsp;linear-gradient(127deg,</span> <br />
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgb(2, 255, 238), rgb(154, 24, 253) 85.71%),</span><br />
                                    <span>&nbsp;&nbsp;linear-gradient(90deg,</span> <br />
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgb(4, 247, 113), rgb(4, 247, 113) 20.71%),</span><br />
                                    <span>&nbsp;&nbsp;linear-gradient(336deg,</span> <br />
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgb(0, 255, 102), rgb(2, 255, 238) 85.71%);</span><br />
                                    <span>&#125;</span>
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}