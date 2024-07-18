import React from 'react';
import './skills.scss'
import icon from '../../images/iconBurgerWhite.svg';

function Skill({ name, value, image, string }) {
    const skillClassName = `skill${name.charAt(0).toUpperCase()}${name.slice(1)}`;

    return (
        <div>
            <div className={`${skillClassName} common-skill`}>

                <div>
                    <span className="name">{name}</span>
                    <span className="value">{value}</span>
                </div>
                <img className="image" src={image} alt={name} />
                <span className="string">{string}</span>
            </div>
            <div className={`${skillClassName} common-skill`}>

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
            string2: ' { '
        },
        function: {
            value: 'Skills',
            string: ' () {'
        },
        skillOne: {
            value: ' =',
            image: icon,
            string: ' ;'
        },
        skillTwo: {
            value: ' =',
            image: icon,
            string: ' ; '
        },
        skillThree: {
            value: ' =',
            image: icon,
            string: ' ; '
        },
        skillFour: {
            value: ' =',
            image: icon,
            string: ' ; '
        },
        skillFive: {
            value: ' =',
            image: icon,
            string: ' ; '
        },
        skillSix: {
            value: ' =',
            image: icon,
            string: ' ; '
        },
        skillSeven: {
            value: ' =',
            image: icon,
            string: ' ; ',
            string2: ' } ',
        },

    };
    const tools = {
        title: {
            value: 'Tools ',
            string: '() {'
        },

        toolsOne: {
            value: ' =',
            image: icon,
            string: ' ; ',
        },
        toolsTwo: {
            value: ' =',
            image: icon,
            string: ' ; ',
        },
        toolsThree: {
            value: ' =',
            image: icon,
            string: ' ; ',
        },
        toolsFour: {
            value: ' =',
            image: icon,
            string: ' ; ',
        },
        toolsFive: {
            value: ' =',
            image: icon,
            string: ' ; ',
        },
        toolsSix: {
            value: ' =',
            image: icon,
            string: ' ; ',
        },
        toolsSeven: {
            value: ' =',
            image: icon,
            string: ' ; ',
        },
    }

    const bracer = ' }';

    return (
        <section className="portfolio-section">
            <div className="left-side">
                <span>Portfolio</span>

            </div>
            <div className="right-side">
                <div className="black-square">
                    <div className="skills">
                        <div className='title'>
                            <span className="const val">{skills.title.value}</span>
                            <span className="func val">{skills.title.value2}</span>
                            <span className="even val">{skills.title.string}</span>
                            <span className="braces val">{skills.title.string2}</span>
                        </div>
                        <div className="function val">
                            <span className="skill val">{skills.function.value}</span>
                            <span className="val2">{skills.function.string}</span>
                        </div>
                        {Object.keys(skills)
                            .slice(2)
                            .map((key) => (
                                <Skill key={key} name={key} value={skills[key].value} image={skills[key].image} string={skills[key].string} />
                            ))}
                        <span>{bracer}</span>

                        <div className="function">
                            <span className="skill val">{tools.title.value}</span>
                            <span className="val2">{tools.title.string}</span>
                        </div>
                        {Object.keys(tools)
                            .slice(2)
                            .map((key) => (
                                <Skill key={key} name={key} value={tools[key].value} image={tools[key].image} string={tools[key].string} />
                            ))}
                        <div>
                            <span>{bracer}</span>
                            <span>{bracer}</span>
                        </div>
                    </div>
                    <div className="description">
                        <span>academia</span>
                    </div>
                </div>
            </div>

        </section>
    );
}


export default Skills;
