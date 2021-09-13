import {FETCH_ALL_BOOKS } from "../actions/types";
import _ from "lodash";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_BOOKS:
            return {...state, ..._.mapKeys(action.payload, 'bookId') };
        default:
            return state;
    }
};
