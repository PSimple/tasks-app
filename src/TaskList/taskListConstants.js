let nextTaskId = 0;
export const addTask = text => ({
    type: 'ADD_TASK',
    id: nextTaskId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTask = id => ({
    type: 'TOGGLE_TASK',
    id
});

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
