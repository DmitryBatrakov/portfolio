// import React, { useState } from "react";
// import Button from '../../button/Button';
// import { Link } from "react-router-dom";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import './worksList.scss';

// const WorksList = ({ works }) => {
//     const buttonString = '</see work>';
//     const [isSelected, setIsSelected] = useState(null);
//     // const [currentSlide, setCurrentSlide] = useState(0);

//     const handleSelectItem = (index) => {
//         if (isSelected === index) {
//             return;
//         }
//         setIsSelected(index);
//     }

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//     };

//     // const nextSlide = () => {
//     //     setCurrentSlide((currentSlide + 1) % works.length);
//     // }

//     // const prevSlide = () => {
//     //     setCurrentSlide((currentSlide - 1 + works.length) % works.length);

//     // }

//     // const slideIndexesToShow = [currentSlide - 1, currentSlide, currentSlide + 1];

//     if (!works) {
//         return <div>No works available.</div>;
//     }


//     return (
//         <section className="work-section">
//             <div className="top-section">
//                 <span>Professional Works</span>
//                 <div className="arrows">
//                     <img src="" alt="left arrow" />
//                     <img src="" alt="right arrow" />
//                 </div>
//             </div>
//             <div className="bottom-section">
//                 <Slider {...settings} >
//                 {/* {works.slice(currentSlide, currentSlide + 3).map((work, index) => ( */}
//                 {works.map((work, index) => (
//                     // <div key={index} className="card" style={{ display: slideIndexesToShow.includes(index) ? 'block' : '' }}>
//                     <div key={index} className="card">
//                         <span className="example-work">{work.example}</span>
//                         <div className={`array ${isSelected === index ? 'active' : ''}`} onClick={() => handleSelectItem(index)}>
//                             <div className="circles">
//                                 <div className="green circle"></div>
//                                 <div className="blue circle"></div>
//                                 <div className="purple circle"></div>
//                             </div>
//                             <div className="works">
//                                 <div className="class">{work.class}</div>
//                                 <div className="constructor">{work.constructor}</div>
//                                 <div className="name">{work.name}</div>
//                                 <div className="type">{work.type}</div>
//                                 <div className="description">{work.description}</div>
//                                 <div className="date">{work.date}</div>
//                                 <div className="priority">{work.priority}</div>
//                                 <div className="completed">{work.completed}</div>
//                                 <div className="bracer">{work.bracer}</div>
//                                 <div className="bracer2">{work.bracer}</div>
//                                 <Button component={Link} to="" className="button">{buttonString}</Button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 </Slider>
//             </div>
//         </section>
//     );
// }

// export default WorksList;


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
                        <Button component={Link} to="" className="button">{buttonString}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksList;
