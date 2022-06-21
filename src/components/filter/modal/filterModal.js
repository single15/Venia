import React from "react";
import Modal from 'react-modal';
import FilterBlock from "components/filter/filterBlock";
import FilterColorBlock from "components/filter/colorblock/filterColorBlock";
import { BRAND_FILTER, SIZE_FILTER, STYLE_FILTER } from "components/filter/utils";
import {ReactComponent as Close} from 'assets/close.svg';
import FilterTag from "components/filter/filterTag"
import 'components/filter/modal/filterModal.scss';


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
                <FilterTag selectedFilter={['Black']} />
                <FilterColorBlock />
                <FilterBlock blockLabel={"Size"} options={SIZE_FILTER} />
                <FilterBlock blockLabel={"Style"} options={STYLE_FILTER} />
                <FilterBlock blockLabel={"Brand"} options={BRAND_FILTER} />
            </div>
        </Modal>
    )
}

export default FilterModal;