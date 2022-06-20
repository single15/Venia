import React from "react";
import FilterBlock from "components/filter/filterBlock";
import FilterColorBlock from "components/filter/colorblock/filterColorBlock";
import { BRAND_FILTER, SIZE_FILTER, STYLE_FILTER } from "components/filter/utils";


const FilterDesktop = () => {
    return (
        <div className="filter-section-desktop">
            <div className="section-header">
                Filters
            </div>
            <FilterBlock blockLabel={"Size"} options={SIZE_FILTER} />
            <FilterBlock blockLabel={"Style"} options={STYLE_FILTER} />
            <FilterColorBlock />
            <FilterBlock blockLabel={"Brand"} options={BRAND_FILTER} />
        </div>
    )
}



export default FilterDesktop;