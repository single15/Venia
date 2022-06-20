import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = (props) => {
    const links = props.links;
    return (
        <>
            <span>{props.isChild ? ` / ${links.menuLabel}` : `${links.menuLabel}`}</span>
            {links.childMenu && <Breadcrumb links={links.childMenu} isChild={true} />}
        </>
    )
}

Breadcrumb.propTypes = {
    links: PropTypes.object
}

export default Breadcrumb;