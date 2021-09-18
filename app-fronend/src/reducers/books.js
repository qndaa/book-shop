import {CREATE_BOOK, CREATE_COMMENT, CREATE_MARK, FETCH_ALL_BOOKS, UPDATE_BOOK} from "../actions/types";
import _ from "lodash";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_BOOKS:
            return {...state, ..._.mapKeys(action.payload, 'bookId') };
        case CREATE_BOOK:
            return {...state, [action.payload.bookId]: action.payload};
        case UPDATE_BOOK:
            return {...state, [action.payload.bookId]: action.payload};
        case CREATE_COMMENT:
            return {...state, [action.payload.bookId]: action.payload};
        case CREATE_MARK:
            return {...state, [action.payload.bookId]: action.payload};
        default:
            return state;
    }
};
