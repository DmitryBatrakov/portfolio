import React, { useState, useRef } from "react";
import WorksList from "../worksList/WorksList";
import Slider from "react-slick";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './workData.scss';
import './workData-media.scss';



const works = [
    {
        example: '{Example work 1}',
        class: 'class Tinder-app {',
        constructor: 'constructor() {',
        name: 'this.name = "First App";',
        type: 'this.type = "Website";',
        description: 'this.description = "Under construction";',
        date: 'this.date = "2023";',
        priority: 'this.priority = 1;',
        completed: 'this.completed = false;',
        bracer: ' } ',
        url:'https://matchbox-zanp.onrender.com'
    },
    {
        example: '{Example work 2}',
        class: 'class 2 {',
        constructor: 'constructor() {',
        name: 'this.name = "Second App";',
        type: 'this.type = "Website";',
        description: 'this.description = "Under construction";',
        date: 'this.date = "2023";',
        priority: 'this.priority = 2;',
        completed: 'this.completed = true;',
        bracer: ' } ',
        url: 'https://todo-xdae.onrender.com'
    },
    {
        example: '{Example work 3}',
        class: 'class 3 {',
        constructor: 'constructor() {',
        name: 'this.name = "Third App";',
        type: 'this.type = "Website";',
        description: 'this.description = "Under construction";',
        date: 'this.date = "2023";',
        priority: 'this.priority = 3;',
        completed: 'this.completed = true;',
        bracer: ' } ',
        url: ''
    },
    {
        example: '{Example work 4}',
        class: 'Project in development {',
        constructor: 'constructor() {',
        name: 'this.name = "soon";',
        type: 'this.type = "soon";',
        description: 'this.description = "soon";',
        date: 'this.date = "soon";',
        priority: 'this.priority = ;',
        completed: 'this.completed = false;',
        bracer: ' } ',
        url: ''
    },
    {
        example: '{Example work 5}',
        class: 'Project in development {',
        constructor: 'constructor() {',
        name: 'this.name = "soon";',
        type: 'this.type = "soon";',
        description: 'this.description = "soon";',
        date: 'this.date = "soon";',
        priority: 'this.priority = ;',
        completed: 'this.completed = false;',
        bracer: ' } ',
        url: ''
    },
    {
        example: '{Example work 6}',
        class: 'Project in development {',
        constructor: 'constructor() {',
        name: 'this.name = "soon";',
        type: 'this.type = "soon";',
        description: 'this.description = "soon";',
        date: 'this.date = "soon";',
        priority: 'this.priority = ;',
        completed: 'this.completed = false;',
        bracer: ' } ',
        url: ''
    },

];



const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: true

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true

            }
        }
    ]
};


const WorksData = () => {
    const [isSelected, setIsSelected] = useState(null);
    const sliderRef = useRef(null);

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    }

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    }

    const handleSelectItem = (index) => {
        setIsSelected(index);
    };

    return (
        <section className="slider-section">
            <div className="top-section">
                <span className="professional-works">Work Portfolio</span>
                <div className="arrows-section">
                    <div onClick={handlePrevClick} className="arrow"><HiOutlineArrowLongLeft /></div>
                    <div onClick={handleNextClick}><HiOutlineArrowLongRight /></div>
                </div>
            </div>
            <Slider {...settings} ref={sliderRef} className="slider">
                {works.map((work, index) => (
                    <WorksList
                        key={index}
                        work={work}
                        index={index}
                        isSelected={isSelected}
                        handleSelectItem={handleSelectItem}
                    />
                ))}
            </Slider>
        </section>
    );
}

export default WorksData;