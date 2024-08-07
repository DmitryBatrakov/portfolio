import React from 'react';
import { CgCloseO } from "react-icons/cg";
import './modalDescription.scss';


const descriptionWorks = [
    {
        name: 'Frontend',
        li: {
            toolsOne: 'JavaScript, React.js, SCSS',
            descriptionToolsOne: 'For building a dynamic and responsive user interface.',
        }

    },
]

const ModalDescription = ({ work, isDescriptionOpen, handleDescriptionClose }) => {
    
    if (!isDescriptionOpen) return null;

    return (
        
            <div className="new-modal-overlay" >
                <div className="new-modal-content" onClick={(e) => e.stopPropagation()} id="element">
                    <div className="text-section">
                        <button
                            className="btn-close"
                            onClick={handleDescriptionClose}
                        >
                            <CgCloseO />
                        </button>
                        <div className="frontend">
                            <h2>{work.frontend.name}</h2>
                            <p>
                                <strong>{work.frontend.liOne.strong}</strong>
                                <span>{work.frontend.liOne.span}</span>
                            </p>
                            <p>
                                <strong>{work.frontend.liTwo.strong}</strong>
                                <span>{work.frontend.liTwo.span}</span>
                            </p>
                            <p>
                                <strong>{work.frontend.liThree.strong} </strong>
                                <span>{work.frontend.liThree.span}</span>
                            </p>
                            <p>
                                <strong>{work.frontend.liFour.strong}</strong>
                                <span>{work.frontend.liFour.span}</span>
                            </p>
                            <p>
                                <strong>{work.frontend.liFive.strong}</strong>
                                <span>{work.frontend.liFive.span}</span>
                            </p>
                        </div>
                        <div className="backend">
                            <h2>{work.backend.name}</h2>
                            <p>
                                <strong>{work.backend.liOne.strong}</strong>
                                <span>{work.backend.liOne.span}</span>
                            </p>
                            <p>
                                <strong>{work.backend.liTwo.strong}</strong>
                                <span>{work.backend.liTwo.span}</span>
                            </p>
                            <p>
                                <strong>{work.backend.liThree.strong}</strong>
                                <span>{work.backend.liThree.span}</span>
                            </p>
                            
                        </div>
                        <div className="features">
                            <h2>{work.features.name}</h2>
                            <p>{work.features.liOne}</p>
                            <p>{work.features.liTwo}</p>
                            <p>{work.features.liThree}</p>
                            <p>{work.features.liFour}</p>
                            <p>{work.features.liFive}</p>
                        </div>
                        <div className="projectOutcome">
                            <h2>{work.projectOutcome.name}</h2>
                            <p>{work.projectOutcome.liOne}</p>
                            <p>{work.projectOutcome.liTwo}</p>
                            <p>{work.projectOutcome.liThree}</p>
                        </div>
                    </div>
                </div>
            </div>
           
    );
};

export default ModalDescription;
