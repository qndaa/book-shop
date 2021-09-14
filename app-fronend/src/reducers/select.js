import {SELECT_LANGUAGE} from "../actions/types";

const INITIAL_STATE = {
    language: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_LANGUAGE:
            return {...state, language: action.payload};
        default:
            return state;
    }
};
