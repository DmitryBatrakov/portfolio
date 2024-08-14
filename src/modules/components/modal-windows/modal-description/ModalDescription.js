// import React from 'react';
// import { CgCloseO } from "react-icons/cg";
// import './modalDescription.scss';

// const ModalDescription = ({ work, isDescriptionOpen, handleDescriptionClose }) => {

//     if (!isDescriptionOpen) return null;

//     const renderListItem = (item) => {
//         if (item.strong || item.span) {
//             return (
//                 <p>
//                     <strong>{item.strong}</strong>
//                     <span>{item.span}</span>
//                 </p>
//             );
//         }
//         return null;
//     };

//     const renderSimpleListItem = (item) => {
//         if (item) {
//             return <p>{item}</p>;
//         }
//         return null;
//     };

//     return (
//         <div className="new-modal-overlay">
//             <div className="new-modal-content" onClick={(e) => e.stopPropagation()} id="element">
//                 <div className="text-section">
//                     <button
//                         className="btn-close"
//                         onClick={handleDescriptionClose}
//                     >
//                         <CgCloseO />
//                     </button>
//                     <div className="frontend">
//                         <h2>{work.frontend.name}</h2>
//                         {renderListItem(work.frontend.liOne)}
//                         {renderListItem(work.frontend.liTwo)}
//                         {renderListItem(work.frontend.liThree)}
//                         {renderListItem(work.frontend.liFour)}
//                         {renderListItem(work.frontend.liFive)}
//                     </div>
//                     <div className="backend">
//                         <h2>{work.backend.name}</h2>
//                         {renderListItem(work.backend.liOne)}
//                         {renderListItem(work.backend.liTwo)}
//                         {renderListItem(work.backend.liThree)}
//                     </div>
//                     <div className="features">
//                         <h2>{work.features.name}</h2>
//                         {renderSimpleListItem(work.features.liOne)}
//                         {renderSimpleListItem(work.features.liTwo)}
//                         {renderSimpleListItem(work.features.liThree)}
//                         {renderSimpleListItem(work.features.liFour)}
//                         {renderSimpleListItem(work.features.liFive)}
//                     </div>
//                     <div className="projectOutcome">
//                         <h2>{work.projectOutcome.name}</h2>
//                         {renderSimpleListItem(work.projectOutcome.liOne)}
//                         {renderSimpleListItem(work.projectOutcome.liTwo)}
//                         {renderSimpleListItem(work.projectOutcome.liThree)}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ModalDescription;

import React from 'react';
import { CgCloseO } from "react-icons/cg";
import './modalDescription.scss';

const ModalDescription = ({ work, isDescriptionOpen, handleDescriptionClose }) => {

    if (!isDescriptionOpen) return null;

    const renderListItems = (items) => {
        return Object.entries(items).map(([key, item]) => {
            if (item.strong || item.span) {
                return (
                    <p key={key}>
                        {item.strong && <strong>{item.strong}</strong>}
                        {item.span && <span>{item.span}</span>}
                    </p>
                );
            } 
            return null;
        });
    };

    return (
        <div className="new-modal-overlay">
            <div className="new-modal-content" onClick={(e) => e.stopPropagation()} id="element">
                <div className="text-section">
                    <button className="btn-close" onClick={handleDescriptionClose}>
                        <CgCloseO />
                    </button>
                    <div className="frontend">
                        <h2>{work.frontend.name}</h2>
                        {renderListItems(work.frontend)}
                    </div>
                    <div className="backend">
                        <h2>{work.backend.name}</h2>
                        {renderListItems(work.backend)}
                    </div>
                    <div className="features">
                        <h2>{work.features.name}</h2>
                        {renderListItems(work.features)}
                    </div>
                    <div className="projectOutcome">
                        <h2>{work.projectOutcome.name}</h2>
                        {renderListItems(work.projectOutcome)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDescription;
