import { combineReducers } from 'redux';
import { tasks, visibilityFilter } from '../TaskList/taskListReducer';

export default combineReducers({
    tasks,
    visibilityFilter
});
