import { duration } from "moment";
import { compose } from "ramda";
import types from "./types";

/* Reducer */

export default (
    state = {
        status: "Stopped",
        seconds: 0,
    }, action ) => {
    switch ( action.type ) {
        case types.START:
            return { ...state, status: "Running" };
        case types.STOP:
            return { ...state, status: "Stopped" };
        case types.TICK:
            return { ...state, seconds: state.seconds + 1 };
        case types.RESET:
            return { ...state, seconds: 0 };
        default:
            return state;
    }
};

/* Private helpers */

// pad :: Number -> String
const pad = ( t ) => t < 10 ? `0${ t }` : `${ t }`;

// formatMoment :: Moment -> String
const formatMoment = ( m ) => `${ pad( m.minutes() ) }:${ pad( m.seconds() ) }`;

// formatTime :: Number -> String
const formatTime = compose( formatMoment, duration );

/* Selectors */

// getFormattedTime :: State -> String
export const getFormattedTime = ( state ) => formatTime( state.seconds * 1000 );

export const getStatus = ( state ) => state.status;
