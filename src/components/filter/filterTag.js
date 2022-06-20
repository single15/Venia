import React from "react";
import {ReactComponent as Close} from 'assets/white_close.svg';


const Tag = ({ item }) => (
    <div className="selected-item">
        <Close />&nbsp;&nbsp;{item}
    </div>
)

const FilterTags = () => {
    const selectedFilter = ['Black'];
    return (
        <>
            {selectedFilter.length > 0 &&
                <div className="filter-selection-block">
                    {selectedFilter.map((item, index) => <Tag key={item + index} item={item} />)}
                    <span>Clear all</span>
                </div>
            }
        </>
    )
}



export default FilterTags;