import React from 'react';

import FilterRow from './components/FilterRow';
import AddTask from './components/AddTask';
import TaskItems from './components/TaskItems';

const TaskList = () => (
    <div>
        <FilterRow />
        <AddTask />
        <TaskItems />
    </div>
);

export default TaskList;
