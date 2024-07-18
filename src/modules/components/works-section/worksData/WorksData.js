import React from "react";
import WorksList from "../worksList/WorksList";


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
        completed: 'this.completed = false;'
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
        completed: 'this.completed = true;'
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
        completed: 'this.completed = true;'
    }
];

const WorksData = () => {

    return (
        <div>
            <WorksList works={works} />
        </div>
    );
}

export default WorksData;
