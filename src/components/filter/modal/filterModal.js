import React from "react";
import Modal from 'react-modal';
import FilterBlock from "../filterBlock";
import FilterColorBlock from "../colorblock/filterColorBlock";
import './filterModal.scss';
import { BRAND_FILTER, SIZE_FILTER, STYLE_FILTER } from "../utils";
import {ReactComponent as Close} from '../../../assets/close.svg';
import FilterTag from "../filterTag"


const FilterModal = ({ open, closeModal }) => {

    return (
        <Modal isOpen={open} overlayClassName="filter-modal" ariaHideApp={false}>
            <div className="modal-header">
                <div>Filters</div>
                <div onClick={closeModal}>
                    <Close />
                </div>
            </div>
            <div className="modal-content">
            <FilterTag />
            <FilterColorBlock />
            <FilterBlock blockLabel={"Size"} options={SIZE_FILTER} />
            <FilterBlock blockLabel={"Style"} options={STYLE_FILTER} />
            <FilterBlock blockLabel={"Brand"} options={BRAND_FILTER} />
            </div>
        </Modal>
    )
}

export default FilterModal;