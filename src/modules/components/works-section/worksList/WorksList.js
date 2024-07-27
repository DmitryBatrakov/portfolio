import React from "react";
import Button from '../../button/Button';
import { Link } from "react-router-dom";
import './worksList.scss';
import './workList-media.scss';

const WorksList = ({ work, index, isSelected, handleSelectItem }) => {
    const buttonString = '</see work>';

    return (
        <section className="work-section">
            <div key={index} className="card">
                <span className="example-work">{work.example}</span>
                <div className={`array ${isSelected === index ? 'active' : ''}`} onClick={() => handleSelectItem(index)}>
                    <div className="circles">
                        <div className="green circle"></div>
                        <div className="blue circle"></div>
                        <div className="purple circle"></div>
                    </div>
                    <div className="works">
                        <div className="class">{work.class}</div>
                        <div className="constructor">{work.constructor}</div>
                        <div className="name">{work.name}</div>
                        <div className="type">{work.type}</div>
                        <div className="description">{work.description}</div>
                        <div className="date">{work.date}</div>
                        <div className="priority">{work.priority}</div>
                        <div className="completed">{work.completed}</div>
                        <div className="bracer">{work.bracer}</div>
                        <div className="bracer2">{work.bracer}</div>
                        <Button target="_blank" to={work.url} component={Link} className="button">{buttonString}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksList;
