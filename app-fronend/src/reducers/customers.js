import {BLOCK_CUSTOMER, CREATE_AUTHOR, FETCH_AUTHORS, FETCH_CUSTOMERS, UNBLOCK_CUSTOMER} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS:
            return {...state, ..._.mapKeys(action.payload, 'user_id') };
        case BLOCK_CUSTOMER:
            return {...state, [action.payload.user_id] : action.payload};
        case UNBLOCK_CUSTOMER:
            return {...state, [action.payload.user_id] : action.payload};

        default:
            return state;
    }
};
