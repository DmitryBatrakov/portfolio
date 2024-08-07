import React, { useState, useRef } from "react";
import WorksList from "../worksList/WorksList";
import Slider from "react-slick";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './workData.scss';
import './workData-media.scss';
import ModalDescription from "../../modal-windows/modal-description/ModalDescription";


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
            dot: '.',
            name: 'name',
            equals: '=',
            doubleQuote1: '"',
            text: 'Matchbox',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisType: {
            this: 'this',
            dot: '.',
            name: 'type',
            equals: '=',
            doubleQuote1: '"',
            text: 'Website',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisDescription: {
            this: 'this',
            dot: '.',
            name: 'description',
            equals: '=',
            doubleQuote1: '"',
            text: 'Work in progress',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisData: {
            this: 'this',
            dot: '.',
            name: 'data',
            equals: '=',
            doubleQuote1: '"',
            text: '2024',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisPriority: {
            this: 'this',
            dot: '.',
            name: 'priority',
            equals: '=',
            doubleQuote1: '"',
            text: '1',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisCompleted: {
            this: 'this',
            dot: '.',
            name: 'completed',
            equals: '=',
            doubleQuote1: '"',
            text: 'false',
            doubleQuote2: '"',
            semicolon: ';'
        },
        braceRight: '}',
        url: 'https://matchbox-zanp.onrender.com',
        nameOfProject: 'Matchbox',
        descriptionOfProject: 'Tinder is a commercial site, which provides an exclusive guide to improving results. The platform offers advice and tactics for increasing matches and success on Tinder.',
        
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
            dot: '.',
            name: 'name',
            equals: '=',
            doubleQuote1: '"',
            text: 'ToDo',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisType: {
            this: 'this',
            dot: '.',
            name: 'type',
            equals: '=',
            doubleQuote1: '"',
            text: 'Website',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisDescription: {
            this: 'this',
            dot: '.',
            name: 'description',
            equals: '=',
            doubleQuote1: '"',
            text: 'Work is completed',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisData: {
            this: 'this',
            dot: '.',
            name: 'data',
            equals: '=',
            doubleQuote1: '"',
            text: '2024',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisPriority: {
            this: 'this',
            dot: '.',
            name: 'priority',
            equals: '=',
            doubleQuote1: '"',
            text: '2',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisCompleted: {
            this: 'this',
            dot: '.',
            name: 'completed',
            equals: '=',
            doubleQuote1: '"',
            text: 'true',
            doubleQuote2: '"',
            semicolon: ';'
        },
        braceRight: '}',
        url: 'https://todo-xdae.onrender.com',
        nameOfProject: 'ToDo App',
        descriptionOfProject: 'The online task management platform goes by the name ToDoApp. It allows individuals to create, alter as well as supervise tasks. In case the page reloads, nothing gets deleted and this is due to data being saved in browser’s local storage.',

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
            dot: '.',
            name: 'name',
            equals: '=',
            doubleQuote1: '"',
            text: 'Weather',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisType: {
            this: 'this',
            dot: '.',
            name: 'type',
            equals: '=',
            doubleQuote1: '"',
            text: 'Website',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisDescription: {
            this: 'this',
            dot: '.',
            name: 'description',
            equals: '=',
            doubleQuote1: '"',
            text: 'Work is completed',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisData: {
            this: 'this',
            dot: '.',
            name: 'data',
            equals: '=',
            doubleQuote1: '"',
            text: '2024',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisPriority: {
            this: 'this',
            dot: '.',
            name: 'priority',
            equals: '=',
            doubleQuote1: '"',
            text: '3',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisCompleted: {
            this: 'this',
            dot: '.',
            name: 'completed',
            equals: '=',
            doubleQuote1: '"',
            text: 'true',
            doubleQuote2: '"',
            semicolon: ';'
        },
        braceRight: '}',
        url: 'https://weather-7dh3.onrender.com',
        nameOfProject: 'Weather',
        descriptionOfProject: 'A web app that enables users to view weather forecasts and obtain the most current weather updates. Apart from searching, the application also has search feature for easy location of forecasts for different cities. Users can access temperature, moisture content, wind speed and other key meteorological indicators quickly through the interface. ',
    },
    {

        example: '{Example work 4}',
        class: {
            model: 'class',
            className: 'wishfriends',
            braceLeft: '{',
        },
        constructor: {
            constructorName: 'constructor',
            brackets: '( )',
            braceLeft: '{',
        },
        thisName: {
            this: 'this',
            dot: '.',
            name: 'name',
            equals: '=',
            doubleQuote1: '"',
            text: 'wishfriends',
            doubleQuote2: '"',
            semicolon: ';',
        },
        thisType: {
            this: 'this',
            dot: '.',
            name: 'type',
            equals: '=',
            doubleQuote1: '"',
            text: 'Social network',
            doubleQuote2: '"',
            semicolon: ';',
        },
        thisDescription: {
            this: 'this',
            dot: '.',
            name: 'description',
            equals: '=',
            doubleQuote1: '"',
            text: 'Work in progress',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisData: {
            this: 'this',
            dot: '.',
            name: 'data',
            equals: '=',
            doubleQuote1: '"',
            text: '2024',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisPriority: {
            this: 'this',
            dot: '.',
            name: 'priority',
            equals: '=',
            doubleQuote1: '"',
            text: '4',
            doubleQuote2: '"',
            semicolon: ';'
        },
        thisCompleted: {
            this: 'this',
            dot: '.',
            name: 'completed',
            equals: '=',
            doubleQuote1: '"',
            text: 'false',
            doubleQuote2: '"',
            semicolon: ';'
        },
        braceRight: '}',
        url: 'https://weather-7dh3.onrender.com',
        nameOfProject: 'Wishfriends',
        descriptionOfProject: 'A social platform for creating and sharing wishlists. Users create profiles with publishable wishlists visible to others. Features include an activity feed, messenger, and anonymous gift reservation, ensuring wishlist creators can`t see what`s been reserved, preserving the element of surprise.',
    },
]




const settings = {
    dots: true,
    arrows: false,
    speed: 300,
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
            breakpoint: 750,
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
