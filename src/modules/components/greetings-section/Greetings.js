// import { useState } from "react";
import Button from "../button/Button";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import './greetings.scss';

export default function Greetings() {

    const buttonContext = '</contact>';


    return (
        <section className="greetings-section">
            <Header />
            <div className="wrapper-top">
                <div className="left-side">
                    <p>Dmitry Batrakov</p>
                    <img src="" alt="Developer {Front-End}" />
                    <br></br>
                    <Button
                        component={Link}
                        to='/contact'
                    // onClick={}
                    >
                        {buttonContext}
                    </Button>
                </div>
                <div className="right-side">
                    <div className="squares">
                        <div className="top-square">
                            {/* <img src="" alt="ellipseGreen" />
                            <img src="" alt="ellipseBlue" />
                            <img src="" alt="ellipsePurple" /> */}
                            <div className="circle green"></div>
                            <div className="circle blue"></div>
                            <div className="circle purple"></div>
                        </div>
                        <div className="bottom-square">
                            <div className="front-block">
                                {/* {codeString} */}
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