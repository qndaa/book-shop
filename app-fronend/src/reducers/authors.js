import {CREATE_AUTHOR, FETCH_ALL_BOOKS, FETCH_AUTHORS} from "../actions/types";
import _ from "lodash";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_AUTHORS:
            return {...state, ..._.mapKeys(action.payload, 'authorId') };
        case CREATE_AUTHOR:
            return {...state, [action.payload.authorId] : action.payload};
        default:
            return state;
    }
};
