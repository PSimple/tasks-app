import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { setVisibilityFilter, addTask, toggleTask } from './taskListConstants';
import {
    getCurrentVisibilityFilter,
    getVisibleTasks
} from './taskListSelectors';

export const useFilter = filter => {
    const dispatch = useDispatch();
    const onClick = useCallback(
        filter => {
            dispatch(setVisibilityFilter(filter));
        },
        [dispatch]
    );
    const visibilityFilter = useSelector(
        state => getCurrentVisibilityFilter(state, filter),
        shallowEqual
    );

    const currentVisibilityFilter = useMemo(() => visibilityFilter, [[filter]]);
    return {
        visibilityFilter: currentVisibilityFilter,
        onClick
    };
};

export const useTask = () => {
    const dispatch = useDispatch();
    const addTaskItem = useCallback(
        task => {
            dispatch(addTask(task));
        },
        [dispatch]
    );

    return {
        addTask: addTaskItem
    };
};

export const useTasks = () => {
    const dispatch = useDispatch();
    const toggleTaskItem = useCallback(
        id => {
            dispatch(toggleTask(id));
        },
        [dispatch]
    );
    const tasks = useSelector(getVisibleTasks, shallowEqual);
    return {
        toggleTask: toggleTaskItem,
        tasks
    };
};
