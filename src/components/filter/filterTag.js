import React from "react";
import {ReactComponent as Close} from 'assets/white_close.svg';


const Tag = ({ item }) => (
    <div className="selected-item">
        <Close />&nbsp;&nbsp;{item}
    </div>
)

const FilterTags = ({ selectedFilter = [], clearFilter }) => {    
    return (
        <>
            {selectedFilter.length > 0 &&
                <div className="filter-selection-block">
                    <div className="selected-item-block">
                        {selectedFilter.map((item, index) => <Tag key={item + index} item={item} />)}
                    </div>                    
                    <div className="clear-link" onClick={clearFilter}>Clear all</div>
                </div>
            }
        </>
    )
}



export default FilterTags;