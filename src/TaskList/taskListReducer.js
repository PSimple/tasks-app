import { visibilityFilters } from './taskListConstants';

export const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TASK':
            return state.map(task =>
                task.id === action.id
                    ? { ...task, completed: !task.completed }
                    : task
            );
        default:
            return state;
    }
};

export const visibilityFilter = (
    state = visibilityFilters.SHOW_ALL,
    action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};
