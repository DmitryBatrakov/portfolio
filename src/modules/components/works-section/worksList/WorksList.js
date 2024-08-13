import React, { useState } from "react";
import Button from '../../button/Button';
import { Link } from "react-router-dom";
import './worksList.scss';
import './workList-media.scss';
import ModalWorks from '../../modal-windows/modal-works/ModalWorks';
import { GiClick } from "react-icons/gi";

const PropertyLine = ({ lineClass, thisProp, dot, name, equals, doubleQuote1, text, doubleQuote2, semicolon }) => (
    <div className={lineClass}>
        <span className="this">{thisProp}</span>
        <span className="dot">{dot}</span>
        <span className="name">{name}</span>
        <span className="equals">{equals}</span>
        <span className="doubleQuote1">{doubleQuote1}</span>
        <span className="text">{text}</span>
        <span className="doubleQuote2">{doubleQuote2}</span>
        <span className="semicolon">{semicolon}</span>
    </div>
);

const WorksList = ({ work, index, isSelected, handleSelectItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModalWindow = () => {
        setIsOpen(true);
    };

    const handleCloseModalWindow = () => {
        setIsOpen(false);
    };


    const buttonString = '</see work>';

    return (
        <section className="work-section">
            <div className="card" key={index} >
                <span className="example-work">{work.example}</span>
                <div
                    className={`array ${isSelected === index ? 'active' : ''}`}
                    onClick={() => handleSelectItem(index)}
                >
                    <div className="circles">
                        <div className="green circle"></div>
                        <div className="blue circle"></div>
                        <div className="purple circle"></div>
                    </div>
                    <div className="works" >
                        <div className="classLine">
                            <span className="model">{work.class.model}</span>
                            <span className="className">{work.class.className}</span>
                            <span className="braceLeftYellow">{work.class.braceLeft}</span>
                        </div>
                        <div className="constructorLine">
                            <span className="constructorName">{work.constructor.constructorName}</span>
                            <span className="brackets">{work.constructor.brackets}</span>
                            <span className="braceLeftPurple">{work.constructor.braceLeft}</span>
                        </div>
                        <PropertyLine
                            lineClass="nameLine line"
                            thisProp={work.thisName.this}
                            dot={work.thisName.dot}
                            name={work.thisName.name}
                            equals={work.thisName.equals}
                            doubleQuote1={work.thisName.doubleQuote1}
                            text={work.thisName.text}
                            doubleQuote2={work.thisName.doubleQuote2}
                            semicolon={work.thisName.semicolon}
                        />
                        <PropertyLine
                            lineClass="typeLine line"
                            thisProp={work.thisType.this}
                            dot={work.thisType.dot}
                            name={work.thisType.name}
                            equals={work.thisType.equals}
                            doubleQuote1={work.thisType.doubleQuote1}
                            text={work.thisType.text}
                            doubleQuote2={work.thisType.doubleQuote2}
                            semicolon={work.thisType.semicolon}
                        />
                        <PropertyLine
                            lineClass="descriptionLine line"
                            thisProp={work.thisDescription.this}
                            dot={work.thisDescription.dot}
                            name={work.thisDescription.name}
                            equals={work.thisDescription.equals}
                            doubleQuote1={work.thisDescription.doubleQuote1}
                            text={work.thisDescription.text}
                            doubleQuote2={work.thisDescription.doubleQuote2}
                            semicolon={work.thisDescription.semicolon}
                        />
                        <PropertyLine
                            lineClass="dataLine line"
                            thisProp={work.thisData.this}
                            dot={work.thisData.dot}
                            name={work.thisData.name}
                            equals={work.thisData.equals}
                            doubleQuote1={work.thisData.doubleQuote1}
                            text={work.thisData.text}
                            doubleQuote2={work.thisData.doubleQuote2}
                            semicolon={work.thisData.semicolon}
                        />
                        <PropertyLine
                            lineClass="priorityLine line"
                            thisProp={work.thisPriority.this}
                            dot={work.thisPriority.dot}
                            name={work.thisPriority.name}
                            equals={work.thisPriority.equals}
                            doubleQuote1={work.thisPriority.doubleQuote1}
                            text={work.thisPriority.text}
                            doubleQuote2={work.thisPriority.doubleQuote2}
                            semicolon={work.thisPriority.semicolon}
                        />
                        <PropertyLine
                            lineClass="completedLine line"
                            thisProp={work.thisCompleted.this}
                            dot={work.thisCompleted.dot}
                            name={work.thisCompleted.name}
                            equals={work.thisCompleted.equals}
                            doubleQuote1={work.thisCompleted.doubleQuote1}
                            text={work.thisCompleted.text}
                            doubleQuote2={work.thisCompleted.doubleQuote2}
                            semicolon={work.thisCompleted.semicolon}
                        />
                        <div className="braceRight1">{work.braceRight}</div>
                        <div className="braceRight2">{work.braceRight}</div>
                        <div className="click-icon-section">
                            <Button
                                target="_blank"
                                to={work.url}
                                component={Link}
                                className="button"
                            >
                                {buttonString}
                            </Button>
                            <div 
                            onClick={handleOpenModalWindow}
                            className="click-icon"
                            >
                                <GiClick />
                                <span className="click-text">click here</span>
                            </div>
                        </div>
                    </div>
                    {isOpen && (
                        <ModalWorks
                            isOpen={isOpen}
                            handleClose={handleCloseModalWindow}
                            handleOpen={handleOpenModalWindow}
                            work={work} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default WorksList;


