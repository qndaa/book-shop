import {FETCH_ALL_BOOKS, FETCH_AUTHORS} from "../actions/types";
import _ from "lodash";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_AUTHORS:
            return {...state, ..._.mapKeys(action.payload, 'authorId') };
        default:
            return state;
    }
};
