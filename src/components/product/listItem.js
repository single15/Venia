import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as WishlistIcon } from 'assets/heart.svg'
import 'components/product/listItem.scss';

const ProductItem = (props) => {
    const { id, title, image, price } = props;

    return (
        <NavLink to={`/product/${id}`}  className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--6 item-card">
            <div className="card">
                <figure>
                    <img src={image} alt={title} width={100}/>
                </figure>
                <div>
                    <b>{title}</b>
                </div>
                <div>
                    <b>$ {price}</b>
                </div>            
                <div>
                    <WishlistIcon />
                </div>
            </div>
        </NavLink>
    )
}

export default ProductItem;