const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';


const initialState = {
    wishlist: [],
    wishlistCount: 0
};


const addItemToWishlist = (state, action) => {
    const itemInWishlist = state.wishlist.find(item => item.id === action.payload.id);
    if(!itemInWishlist) {
      state.wishlist = [...state.wishlist, action.payload];
    } else {
        
    }
    return { ...state, wishlistCount: state.wishlist.length };
  }
const wishlist = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_WISHLIST:
            return addItemToWishlist(state, action);
        default: 
        return state;
    }
}


export default wishlist;

export const addToWishList = item => ({
    type: ADD_TO_WISHLIST,
    payload: item
})

export const removeFromWishList = item => ({
    type: REMOVE_FROM_WISHLIST,
    payload: item
})