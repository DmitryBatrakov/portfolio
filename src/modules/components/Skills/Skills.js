import React from 'react';
import './skills.scss';
import './skills-media.scss';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { PiFigmaLogoBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";

function Skill({ name, value, image, string }) {
    const skillClassName = `skill${name.charAt(0).toUpperCase()}${name.slice(1)}`;

    const iconStyles = {
        skillOne: { color: 'rgb(255, 103, 8)' },
        skillTwo: { color: 'rgb(27, 169, 245)' },
        skillThree: { color: 'rgb(245, 234, 27)' },
        skillFour: { color: 'rgb(27, 143, 245)' },
        skillFive: { color: 'rgb(10, 122, 0)' },
        skillSix: { color: 'rgb(23, 209, 255)' },

        toolsOne: { color: 'rgb(48, 193, 255)' },
        toolsTwo: { color: 'rgb(236, 0, 157)' },
        toolsThree: { color: 'rgb(208, 101, 0)' },
        toolsFour: { color: 'rgb(255, 255, 255)' },
        toolsFive: { color: 'rgb(255, 255, 255)' },
        toolsSix: { color: 'rgb(48, 193, 255)' },

    };

    const getIconStyle = (iconName) => {
        return iconStyles[iconName] || {};
    };

    return (
        <div className="render-skills">
            <div className={`${skillClassName} common-skill`}>

                {/* <div className="nameAndValue"> */}
                <span className="name">{name}</span>
                <span className="value">{value}</span>
                {/* </div> */}
                <span style={getIconStyle(name)} className="iconSkill">{image}</span>
                <span className="string">{string}</span>
            </div>


        </div>
    );
}

function Skills() {
    const skills = {
        title: {
            value: ' const ',
            value2: 'SkillsAndTools',
            string: ' =',
            string2: ' { ',
            string3: ' } ',
        },
        function: {
            value: 'Skills',
            string: ' ( ) {'
        },
        skillOne: {
            value: ' =',
            image: <FaHtml5 />,
            string: ' ;'
        },
        skillTwo: {
            value: ' =',
            image: <FaCss3Alt />,
            string: ' ; '
        },
        skillThree: {
            value: ' =',
            image: <RiJavascriptFill />,
            string: ' ; '
        },
        skillFour: {
            value: ' =',
            image: <BiLogoTypescript />,
            string: ' ; '
        },
        skillFive: {
            value: ' =',
            image: <FaNodeJs />,
            string: ' ; '
        },
        skillSix: {
            value: ' =',
            image: <FaReact />,
            string: ' ; '
        },

    };
    const tools = {
        title: {
            value: 'Tools ',
            string: '( ) {'
        },

        toolsOne: {
            value: ' =',
            image: <SiTailwindcss />,
            string: ' ; ',
        },
        toolsTwo: {
            value: ' =',
            image: <FaSass />,
            string: ' ; ',
        },
        toolsThree: {
            value: ' =',
            image: <RiFirebaseFill />,
            string: ' ; ',
        },
        toolsFour: {
            value: ' =',
            image: <PiFigmaLogoBold />,
            string: ' ; ',
        },
        toolsFive: {
            value: ' =',
            image: <FaGithub />,
            string: ' ; ',
        },
        toolsSix: {
            value: ' =',
            image: <VscVscodeInsiders />,
            string: ' ; ',
        },
    }

    return (
        <section className="portfolio-section">
            <div className="left-side">
                <div className="portfolio">
                    <span className="item1">Portfolio </span>
                    <span className="item2">& Resume.</span>
                </div>
                <div className="portfolio2">
                    <span className="item3">Here, I have listed my academic background and my technical skills.</span>
                    <span className="item4">As I improve, I add new "skill objects."</span>
                </div>
            </div>
            <div className="right-side">
                <div className="black-square">
                    <div className="skills">
                        <div className='title-skills'>
                            <span className="const">{skills.title.value}</span>
                            <span className="func">{skills.title.value2}</span>
                            <span className="even">{skills.title.string}</span>
                            <span className="bracers">{skills.title.string2}</span>
                        </div>
                        <div className="function-skills">
                            <span className="skill">{skills.function.value}</span>
                            <span className="string">{skills.function.string}</span>
                        </div>
                        <div className="render-skills2">
                            {Object.keys(skills).filter(skill => skill !== 'title' && skill !== 'function').map((key) => (
                                <Skill key={key} name={key} value={skills[key].value} image={skills[key].image} string={skills[key].string} />
                            ))}
                        </div>
                        <span className="bracer">{skills.title.string3}</span>

                        {/* Отображение инструментов */}
                        <div className="function-tools">
                            <span className="skill">{tools.title.value}</span>
                            <span className="string">{tools.title.string}</span>
                        </div>
                        {Object.keys(tools).filter(tool => tool !== 'title').map((key) => (
                            <Skill key={key} name={key} value={tools[key].value} image={tools[key].image} string={tools[key].string} />
                        ))}
                        <div className="bracers-from-object">
                            <span className="bracer">{skills.title.string3}</span>
                            <p className="bracer-2">{skills.title.string3}</p>
                        </div>
                    </div>
                    <div className="description">
                        <div className="course">
                            <span className="education">Education</span>
                            <div className="descriptionOfCourse">
                                <div className="circle green"></div>
                                <div className="description-text">
                                    <span> Programming & Software Engineering FULL STACK DEVELOPER</span>
                                    <span>
                                        I completed a 506-hour course where I learned web development with HTML,
                                        CSS, and JavaScript, and gained proficiency in frameworks like React.js and
                                        Node.js. I also worked with SQL and NoSQL databases and developed skills in
                                        creating and testing web applications. These skills enable me to efficiently
                                        build and maintain fully functional web apps.
                                    </span>
                                </div>
                            </div>
                            {/* <div className="descriptionOfCourse">
                                <div className="circle purple"></div>
                                <div className="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum itaque fugit, dolores voluptas voluptatem nemo quae, quas pariatur praesentium ab, quam eos unde? Illum, fugiat tempore eveniet nam quisquam libero.</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;