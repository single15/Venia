import React, { useState } from "react";
import { ReactComponent as Chevrondown } from '../../assets/chevron-down.svg';
import { ReactComponent as Chevronup } from '../../assets/chevron-up.svg';
import './dropdown.scss';
import Option from "./option";

const Dropdown = ({ label, options }) => {
    const [selectedItem, setSelectedItem] = useState('Latest');
    const [isOpen, toggleDropdown] = useState(false);
    return (
        <div className="dropdown-wrapper">
            <button className="selected-item" onClick={() =>  toggleDropdown(!isOpen)}>
                <div>Sort By {selectedItem}</div>
                <div>
                    {isOpen ? <Chevronup /> : <Chevrondown />}
                </div>
            </button>
            {isOpen && 
                <div className="option-wrapper">
                    {options.map(({ value, id }) => <Option key={id} value={value} setSelectedItem={setSelectedItem} />)}
                </div>
            }
        </div>

    )
}

export default Dropdown;