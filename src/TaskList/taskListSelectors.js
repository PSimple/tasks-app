import { createSelector } from 'reselect';
import { visibilityFilters } from './taskListConstants';

export const getVisibilityFilter = state => state && state.visibilityFilter;
export const getCurrentVisibilityFilter = createSelector(
    state => state && state.visibilityFilter,
    (_, filter) => filter,
    (visibilityFilter, filter) => visibilityFilter === filter
);
export const getAllTasks = state => state.tasks;
export const getCompletedTasks = createSelector(
    getAllTasks,
    tasks => tasks.filter(t => t.completed)
);
export const getActiveTasks = createSelector(
    getAllTasks,
    tasks => tasks.filter(t => !t.completed)
);

export const getVisibleTasks = createSelector(
    getVisibilityFilter,
    getAllTasks,
    getActiveTasks,
    getCompletedTasks,
    (filter, all, active, completed) => {
        switch (filter) {
            case visibilityFilters.SHOW_ALL:
                return all;
            case visibilityFilters.SHOW_COMPLETED:
                return completed;
            case visibilityFilters.SHOW_ACTIVE:
                return active;
            default:
                throw new Error('Unknown filter: ' + filter);
        }
    }
);
