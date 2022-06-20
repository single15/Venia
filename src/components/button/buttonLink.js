import React from "react";
import './button.scss';


const ButtonLink = (props) => {
    return(
        <button className={`btn-link btn-link-${props.type}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default ButtonLink;