import { combineReducers } from "redux";
import cart from "./cart";
import filterReducer from "./filter";
import products from "./product";
import wishlist from "./wishlist";

const reducer = combineReducers({
    products,
    filterReducer,
    cart,
    wishlist
})

export default reducer;