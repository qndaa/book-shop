import {CREATE_LANGUAGE, FETCH_LANGUAGE, UPDATE_LANGUAGE} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LANGUAGE:
            return {...state, ..._.mapKeys(action.payload, 'languageId') };
        case CREATE_LANGUAGE:
            return {...state, [action.payload.languageId]: action.payload};
        case UPDATE_LANGUAGE:
            return {...state, [action.payload.languageId]: action.payload};
        default:
            return state;
    }
};
