import {CREATE_CATEGORY, FETCH_CATEGORY} from "../actions/types";
import _ from "lodash";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {...state, ..._.mapKeys(action.payload, 'categoryId') };
        case CREATE_CATEGORY:
            return {...state, [action.payload.categoryId]: action.payload};
        default:
            return state;
    }
};
