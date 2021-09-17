import {CREATE_BOOK, FETCH_ALL_BOOKS} from "../actions/types";
import _ from "lodash";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_BOOKS:
            return {...state, ..._.mapKeys(action.payload, 'bookId') };
        case CREATE_BOOK:
            return {...state, [action.payload.bookId]: action.payload};
        default:
            return state;
    }
};
