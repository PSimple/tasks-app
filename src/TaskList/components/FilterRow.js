import React, { useCallback } from 'react';

import { useFilter } from '../TaskListHooks';
import { visibilityFilters } from '../taskListConstants';

const Link = props => {
    const { onClick, visibilityFilter } = useFilter(props.filter);
    const filterOnClick = useCallback(() => {
        onClick(props.filter);
    }, [props.filter]);

    return (
        <button
            onClick={filterOnClick}
            disabled={visibilityFilter}
            style={{
                marginLeft: '4px'
            }}
        >
            {props.children}
        </button>
    );
};

const FilterRow = () => (
    <>
        <p>
            <span>Show: </span>
            <Link filter={visibilityFilters.SHOW_ALL}>All</Link>
            <Link filter={visibilityFilters.SHOW_ACTIVE}>Active</Link>
            <Link filter={visibilityFilters.SHOW_COMPLETED}>Completed</Link>
        </p>
    </>
);

export default FilterRow;
