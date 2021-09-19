import {
    ADD_TO_SHOPPING_CART,
    CREATE_AUTHOR, DELETE_FROM_SHOPPING_CART,
    FETCH_AUTHORS,
    FETCH_SHOPPING_CART,
    UPDATE_SHOPPING_CART
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SHOPPING_CART:
            return {...state, ..._.mapKeys(action.payload, 'orderLineId') };
        case ADD_TO_SHOPPING_CART:
            return {...state, [action.payload.orderLineId]: action.payload};
        case UPDATE_SHOPPING_CART:
            return {...state, [action.payload.orderLineId]: action.payload};
        case DELETE_FROM_SHOPPING_CART:
            return _.omit(state, action.payload.orderLineId);
        default:
            return state;
    }
};
