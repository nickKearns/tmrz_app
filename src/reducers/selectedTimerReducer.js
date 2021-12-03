import { SELECT_TIMER } from "../actions/index.js";

const selectedTimerReducer = (state = null, action) => {
    switch (action.type) {
        case SELECT_TIMER:
            return state = action.payload.index
        default:
            return state; //so this could return null?
    }
}

export default selectedTimerReducer;