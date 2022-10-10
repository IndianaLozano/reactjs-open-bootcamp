import React from 'react';
import {LEVELS} from "../../models/enum/levels";
import {Task} from "../../models/Task";
import TaskComponent from "../pure/TaskComponent";

const taskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // const changeState = (id) => {
    //     console.log('TODO: Change state')
    // }

    return (
        <div>
            <div>
                <h1>
                    Your Tasks:
                </h1>
            </div>
            {/*aplicar for o map para renderizar una lista de tareas*/}
            <TaskComponent task={defaultTask}/>
        </div>
    );

}

export default taskList;