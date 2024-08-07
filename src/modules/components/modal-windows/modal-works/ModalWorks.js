import React, {useState} from 'react';
import { CgCloseO } from "react-icons/cg";
import './modalWorks.scss';
import ModalDescription from '../modal-description/ModalDescription';

const ModalWorks = ({ isOpen, handleClose, work }) => {

    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    const handleDescriptionOpen = () => {
        setIsDescriptionOpen(true);
    };

    const handleDescriptionClose = () => {
        setIsDescriptionOpen(false);
    };

    // const handleToggleDescription = () => {
    //     setIsDescriptionOpen(!isDescriptionOpen)
    // }

    if (!isOpen) return null;

    return (
            <div className="modal-overlay" onClick={handleClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="text-section">
                        <button
                            onClick={handleClose}
                            className="btn-close">
                            <CgCloseO />
                        </button>
                        <h2 className="projectName">{work.nameOfProject}</h2>
                        <p>{work.descriptionOfProject}</p>
                    </div>
                    <div className="button-section">
                        <button
                            className="btn-more"
                            onClick={handleDescriptionOpen}
                        >
                            More
                        </button>
                    </div>
                </div> 
                {isDescriptionOpen && (
                        <ModalDescription
                            isDescriptionOpen={isDescriptionOpen}
                            handleDescriptionClose={handleDescriptionClose}
                            handleDescriptionOpen={handleDescriptionOpen}
                            work={work}
                        />
                    )}   
            </div>
    );
};

export default ModalWorks;
