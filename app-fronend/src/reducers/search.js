import {SEARCH, SELECT_LANGUAGE} from "../actions/types";




export default (state = null, action) => {
    switch (action.type) {
        case SEARCH:
            return action.payload;
        default:
            return state;
    }
};
