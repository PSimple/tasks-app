import React from 'react';

import Task from './Task';
import { useTasks } from '../TaskListHooks';

const TaskItems = () => {
    const { tasks, toggleTask } = useTasks();
    return (
        <ul>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    {...task}
                    onClick={() => toggleTask(task.id)}
                />
            ))}
        </ul>
    );
};
export default TaskItems;
