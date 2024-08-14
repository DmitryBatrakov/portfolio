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

        frontend: {

            name: 'Frontend',
            liOne: {
                strong: 'JavaScript, React.js, SCSS: ',
                span: 'For building a dynamic and responsive user interface'
            },
            liTwo: {
                strong: 'React Router DOM: ',
                span: 'For seamless and smooth navigation between different pages of the application.'
            },
            liThree: {
                strong: 'React Hooks: ',
                span: 'For managing component state and lifecycle methods more effectively.'
            },
            liFour: {
                strong: 'Geolocation API: ',
                span: 'For tracking user location to provide personalized information and automatic currency conversion.'
            },
            liFive: {
                strong: 'SVG Integration: ',
                span: 'For scalable and high-quality icons.'
            },
        },

        backend: {

            name: 'Backend',
            liOne: {
                strong: 'Node.js: ',
                span: 'For server-side development, ensuring a robust and scalable backend.',
            },
            liTwo: {
                strong: 'REST API: ',
                span: 'For communication between the frontend and backend, ensuring data exchange.',
            },
            liThree: {
                strong: 'JSON: ',
                span: 'For data formatting and exchange between the client and server.',
            },
        },

        features: {
            name: 'Features',
            liOne: {
                strong: '1. ',
                span: ' Developed a fully dynamic web application using React, ensuring a modern and responsive design adaptable to various devices.',
            },
            liTwo: {
                strong: '2. ',
                span: ' Utilized React Router DOM to ensure smooth and intuitive navigation between different sections of the application.',
            },
            liThree: {
                strong: '3. ',
                span: ' Integrated geolocation tracking to provide personalized information and automatic currency conversion based on the user`s location.'
            },
            liFour: {
                strong: '4. ',
                span: '  Connected a reliable payment system for processing transactions securely and efficiently.'
            },
            liFive: {
                strong: '5. ',
                span: ' Integrated cloud storage for product management and user delivery, and set up automatic email delivery to send the purchased guide to the user`s email.',
            }
        },

        projectOutcome: {
            name: 'Project Outcome:',
            liOne:
            {
                strong: '1 .',
                span: 'Performance Improvements: Achieved a 30% increase in loading speed and a 25% increase in user engagement due to the modern and responsive design.',
            },
            liTwo: {
                strong: '2. ',
                span: ' Business Impact: Increased purchase conversion by 18% and reduced support costs by 30% due to the integrated payment system and automated email delivery.',
            },
            liThree: {
                strong: '3. ',
                span: ' Development Efficiency: Improved the development process speed by 20% through organized component structure and effective state management.',
            }
        }
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

        frontend: {

            name: 'Frontend',
            liOne: {
                strong: 'HTML: ',
                span: 'For structuring the content of the application.'
            },
            liTwo: {
                strong: 'CSS: ',
                span: 'For styling the application and ensuring a responsive design.'
            },
            liThree: {
                strong: 'JavaScript: ',
                span: 'For adding interactivity and functionality to the application.'
            },
            liFour: {
                strong: 'Local Storage: ',
                span: 'For storing tasks locally in the user`s browser to ensure data persistence.'
            },
            liFive: {
                strong: 'SVG Integration: ',
                span: 'For scalable and high-quality icons.'
            },
        },

        backend: {

            name: 'Backend',
            liOne: {
                strong: '',
                span: '',
            },
            liTwo: {
                strong: '',
                span: '',
            },
            liThree: {
                strong: '',
                span: '',
            },
        },

        features: {
            name: 'Features',
            liOne: {
                strong: '1. ',
                span: ' Task Management: add Tasks, delete tasks, mark as completed ',
            }, 
            liTwo: {
                strong: '2. ',
                span:' Local Storage Integration: All tasks are saved in the browser`s local storage. This ensures that even after a page reload or browser restart, all tasks remain intact.',
            }, 
            liThree: {
                strong: '3. ',
                span: ' Automatic Save: Any changes to the tasks (add, delete, mark as complete) are automatically saved to local storage.',
            }, 
            liFour: {
                strong: '4. ',
                span:' Responsive Design: The application is designed to be responsive, ensuring it looks and functions well on various devices, including desktops, tablets, and smartphones.',
            }, 
            liFive: {
                strong: '5. ',
                span:' Clear Visual Indicators: Tasks are visually distinct based on their status (completed or pending).',
            }, 
        },

        projectOutcome: {
            name: 'Project Outcome:',
            liOne: {
                strong: '1. ',
                span:' User Convenience: Provided users with a reliable tool to manage their daily tasks effectively.',
            },
            liTwo: {
                strong: '2. ',
                span:' Data Persistence: Ensured users do not lose their task data even after closing the browser or refreshing the page.',
            },
            liThree: {
                strong: '3. ',
                span:' User Engagement: Increased user engagement by providing a simple, easy-to-use interface for task management.',
            }, 
        }
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

        frontend: {

            name: 'Frontend',
            liOne: {
                strong: 'HTML: ',
                span: 'For structuring the content of the application.'
            },
            liTwo: {
                strong: 'CSS: ',
                span: 'For styling the application and ensuring a responsive design.'
            },
            liThree: {
                strong: 'JavaScript: ',
                span: 'For adding interactivity and functionality to the application.'
            },
            liFour: {
                strong: 'SVG Integration: ',
                span: 'For scalable and high-quality icons.'
            },
            liFive: {
                strong: 'Bootstrap: ',
                span: 'For quick and responsive design elements and layout.'
            },
        },

        backend: {

            name: 'Backend',
            liOne: {
                strong: 'Geolocation API: ',
                span: 'For determining the user`s current location.',
            },
            liTwo: {
                strong: 'Weather API: ',
                span: 'For fetching real-time weather data based on the user`s location.',
            },
            liThree: {
                strong: '',
                span: '',
            },
        },

        // features: {
        //     name: 'Features',
        //     liOne: '1. Current Weather: Displays the current weather conditions, including temperature, humidity, wind speed, and weather description.',
        //     liTwo: '2. Geolocation API Integration: Automatically detects the user`s location to provide accurate local weather information.',
        //     liThree: '3. Manual Location Search: Allows users to manually search for weather information by entering a city name.',
        //     liFour: '4. Responsive Design: Ensures the application looks and functions well on various devices, including desktops, tablets, and smartphones.',
        //     liFive: '5. SVG Icons: Utilizes scalable and high-quality SVG icons to represent different weather conditions visually.',
        // },

        features: {
            name: 'Features',
            liOne: {
                strong: '1. ',
                span: 'Current Weather: Displays the current weather conditions, including temperature, humidity, wind speed, and weather description.',
            },
            liTwo: {
                strong: '2. ',
                span: 'Geolocation API Integration: Automatically detects the user`s location to provide accurate local weather information.',
            },
            liThree: {
                strong: '3. ',
                span: 'Manual Location Search: Allows users to manually search for weather information by entering a city name.',
            },
            liFour: {
                strong: '4. ',
                span: 'Responsive Design: Ensures the application looks and functions well on various devices, including desktops, tablets, and smartphones.',
            },
            liFive: {
                strong: '5. ',
                span: 'SVG Icons: Utilizes scalable and high-quality SVG icons to represent different weather conditions visually.',

            },
        },

        projectOutcome: {
            name: 'Project Outcome:',
            liOne: {
                strong: '1. ',
                span: ' User Convenience: Provided users with real-time weather information based on their current location, enhancing their daily planning.',
            },
            liTwo: {
                strong: '2. ',
                span: 'Data Accuracy: Ensured accurate and up-to-date weather data through the integration of a reliable weather API.',
            },
            liThree: {
                strong: '3. ',
                span: ' User Engagement: Increased user engagement with a clean, responsive design and visually appealing weather icons.',
            }
        }
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

        frontend: {

            name: 'Frontend',
            liOne: {
                strong: ' ',
                span: 'In progress'
            },
            liTwo: {
                strong: '',
                span: ''
            },
            liThree: {
                strong: '',
                span: ''
            },
            liFour: {
                strong: '',
                span: ''
            },
            liFive: {
                strong: '',
                span: ''
            },
        },

        backend: {

            name: 'Backend',
            liOne: {
                strong: ' ',
                span: 'In progress',
            },
            liTwo: {
                strong: '',
                span: '',
            },
            liThree: {
                strong: '',
                span: '',
            },
        },

        features: {
            name: 'Features',
            liOne: {
                strong: ' ',
                span:'In progress',
            } ,
            liTwo: {
                strong: '',
                span:'',
            }, 
            liThree: {
                strong: '',
                span:'',
            } ,
            liFour: {
                strong: '',
                span:'',
            }  ,
            liFive: {
                strong: '',
                span:'',
            },
        },

        projectOutcome: {
            name: 'Project Outcome:',
            liOne: {
                strong: ' ',
                span:'In progress',
            },
            liTwo: {
                strong: '',
                span: '',
            } ,
            liThree: {
                strong: '',
                span:'',
            } ,
        }
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
