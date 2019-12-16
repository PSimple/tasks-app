import React from 'react';
import { useTask } from '../TaskListHooks';

const AddTask = () => {
    let input;
    const { addTask } = useTask();
    return (
        <>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    addTask(input.value);
                    input.value = '';
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
};

export default AddTask;
