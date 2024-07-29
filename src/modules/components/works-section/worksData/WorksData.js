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
        class: {
            model: 'class',
            className: 'DatingApp',
            braceLeft: '{',
        },
        constructor: {
            constructorName: 'constructor',
            brackets: '( )',
            braceLeft: '{',
        },
        thisName: {
            this: 'this',
            dot:'.',
            name:'name',
            equals: '=',
            doubleQuote1: '"',
            text: 'Matchbox',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisType: {
            this: 'this',
            dot:'.',
            name:'type',
            equals: '=',
            doubleQuote1: '"',
            text: 'Website',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisDescription: {
            this: 'this',
            dot:'.',
            name:'description',
            equals: '=',
            doubleQuote1: '"',
            text: 'Work in progress',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisData: {
            this: 'this',
            dot:'.',
            name:'data',
            equals: '=',
            doubleQuote1: '"',
            text: '2024',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisPriority: {
            this: 'this',
            dot:'.',
            name:'priority',
            equals: '=',
            doubleQuote1: '"',
            text: '1',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisCompleted: {
            this: 'this',
            dot:'.',
            name:'completed',
            equals: '=',
            doubleQuote1: '"',
            text: 'false',
            doubleQuote2: '"',
            semicolon: ';'
        },
        braceRight: '}',
        url:'https://matchbox-zanp.onrender.com'
    },
    {

        example: '{Example work 2}',
        class: {
            model: 'class',
            className: 'ToDoApp',
            braceLeft: '{',
        },
        constructor: {
            constructorName: 'constructor',
            brackets: '( )',
            braceLeft: '{',
        },
        thisName: {
            this: 'this',
            dot:'.',
            name:'name',
            equals: '=',
            doubleQuote1: '"',
            text: 'ToDo',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisType: {
            this: 'this',
            dot:'.',
            name:'type',
            equals: '=',
            doubleQuote1: '"',
            text: 'Website',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisDescription: {
            this: 'this',
            dot:'.',
            name:'description',
            equals: '=',
            doubleQuote1: '"',
            text: 'Work is completed',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisData: {
            this: 'this',
            dot:'.',
            name:'data',
            equals: '=',
            doubleQuote1: '"',
            text: '2024',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisPriority: {
            this: 'this',
            dot:'.',
            name:'priority',
            equals: '=',
            doubleQuote1: '"',
            text: '1',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisCompleted: {
            this: 'this',
            dot:'.',
            name:'completed',
            equals: '=',
            doubleQuote1: '"',
            text: 'true',
            doubleQuote2: '"',
            semicolon: ';'
        },
        braceRight: '}',
        url: 'https://todo-xdae.onrender.com'
         
    },
    {

        example: '{Example work 3}',
        class: {
            model: 'class',
            className: 'Weather',
            braceLeft: '{',
        },
        constructor: {
            constructorName: 'constructor',
            brackets: '( )',
            braceLeft: '{',
        },
        thisName: {
            this: 'this',
            dot:'.',
            name:'name',
            equals: '=',
            doubleQuote1: '"',
            text: 'Weather',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisType: {
            this: 'this',
            dot:'.',
            name:'type',
            equals: '=',
            doubleQuote1: '"',
            text: 'Website',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisDescription: {
            this: 'this',
            dot:'.',
            name:'description',
            equals: '=',
            doubleQuote1: '"',
            text: 'Work is completed',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisData: {
            this: 'this',
            dot:'.',
            name:'data',
            equals: '=',
            doubleQuote1: '"',
            text: '2024',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisPriority: {
            this: 'this',
            dot:'.',
            name:'priority',
            equals: '=',
            doubleQuote1: '"',
            text: '1',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisCompleted: {
            this: 'this',
            dot:'.',
            name:'completed',
            equals: '=',
            doubleQuote1: '"',
            text: 'true',
            doubleQuote2: '"',
            semicolon: ';'
        },
        braceRight: '}',
        url: 'https://weather-7dh3.onrender.com',
    },
]




const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 3900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: true

            }
        },
        {
            breakpoint: 700,
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