import React from "react";
import Media from "react-media";
import Quantity from "components/filter/quantity/quantity";
import { ReactComponent as HeartIcon } from 'assets/heart.svg'
import { ReactComponent as PencilIcon } from 'assets/edit-2.svg'
import { ReactComponent as TrashIcon } from 'assets/trash-2.svg'
import { NavLink } from "react-router-dom";
import { addToCart, removeCart } from "reducer/cart";
import { useDispatch } from "react-redux";
import 'components/cart/cartItem/cartItem.scss';

const SelectedFeature = ({ label, value }) => (
    <div>
        {label} : {value}
    </div>
)

const getPrices = (quantity, price) => price * quantity;

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const updateQuantity = (value) => {
        if(value > 0) {
            let quantity = value-item.quantity;
            dispatch(addToCart({ ...item, quantity }));
        }
    }

    return (
        <section className="cart-item-section">
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--tablet--4 aem-GridColumn--phone--4">
                    <figure>
                        <img src={item.image} alt={item.title} />
                    </figure>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--7 aem-GridColumn--phone--7">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <b>{item.title}</b>
                            <SelectedFeature label="Size" value={item.size} />
                            <SelectedFeature label="Color" value={item.color} />
                            <div>$ {getPrices(item.quantity, item.price).toFixed(2)}</div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                            <Quantity quantity={item.quantity} showLabel={false} small={true} updateQuantity={(value) => updateQuantity(value)} />
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--1 aem-GridColumn--phone--1">
                    <Media query={'(max-width: 1200px)'}>
                        {matches => (
                            <>
                               {matches ? <span>...</span>
                                : <div className="action-section">
                                    <div>
                                        <NavLink to={`/product/${item.id}`}>
                                            <PencilIcon />&nbsp;&nbsp;Edit item
                                        </NavLink>
                                    </div>
                                    <div onClick={() => dispatch(removeCart(item))}><TrashIcon /> &nbsp;&nbsp;Remove</div>
                                    <div onClick={() => alert("Item save for later.")}><HeartIcon /> &nbsp;&nbsp;Save for later</div>
                                </div>}

                            </>
                        )}
                    </Media>

                </div>
            </div>
        </section>
    )
}


export default CartItem;