import React, { useState } from "react";
import Button from '../../button/Button';
import { Link } from "react-router-dom";
import './worksList.scss';

const WorksList = ({ works }) => {

    const buttonString = '</see work>';
    const [isSelected, setIsSelected] = useState(null);

    const handleSelectItem = (index) => {
        if (isSelected === index) {
            return;
        }
        setIsSelected(index);
    }

    if (!works) {
        return <div>No works available.</div>;
    }

    return (
        <section>
            <div className="top-section ">
                <span>Professional Works</span>
                <div className="arrows">
                    <img src="" alt="left arrow" />
                    <img src="" alt="right arrow" />
                </div>
            </div>
            <div className="bottom-section">
                {works.map((work, index) => (
                    <div>
                        <span>{work.example}</span>
                        <div
                            key={index}
                            className={`array ${isSelected === index ? 'active' : ''} `}
                            onClick={() => handleSelectItem(index)}
                        >
                            <div className="circles">
                                <div className="green circle"></div>
                                <div className="blue circle"></div>
                                <div className="purple circle"></div>
                            </div>
                            <span>{work.example}</span>
                            <span>{work.class}</span>
                            <span>{work.constructor}</span>
                            <span>{work.name}</span>
                            <span>{work.type}</span>
                            <span>{work.description}</span>
                            <span>{work.date}</span>
                            <span>{work.priority}</span>
                            <span>{work.completed}</span>
                            <Button
                                component={Link}
                                to="">{buttonString}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorksList;
