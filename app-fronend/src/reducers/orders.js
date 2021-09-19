import {
    APPROVE_ORDER,
    CANCEL_ORDER,
    CREATE_ORDER,
    DECLINE_ORDER,
    FETCH_ORDERS,
    FETCH_ORDERS_BY_CUSTOMER
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {..._.mapKeys(action.payload, 'orderId')};
        case FETCH_ORDERS_BY_CUSTOMER:
            return {..._.mapKeys(action.payload, 'orderId')};
        case CREATE_ORDER:
            return {...state, [action.payload.orderId]: action.payload};
        case APPROVE_ORDER:
            return {...state, [action.payload.orderId]: action.payload};
        case DECLINE_ORDER:
            return {...state, [action.payload.orderId]: action.payload};
        case CANCEL_ORDER:
            return {...state, [action.payload.orderId]: action.payload};
        default:
            return state;
    }
};
