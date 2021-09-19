import {CREATE_AUTHOR, CREATE_CITY, FETCH_AUTHORS, FETCH_CITIES} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CITIES:
            return {...state, ..._.mapKeys(action.payload, 'cityId') };
        case CREATE_CITY:
            return {...state, [action.payload.cityId] : action.payload};
        default:
            return state;
    }
};
