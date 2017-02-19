import types from "./types";

export const start = () => ( { type: types.START } );
export const tick = () => ( { type: types.TICK } );
export const stop = () => ( { type: types.STOP } );
export const reset = () => ( { type: types.RESET } );

export default {
    start,
    tick,
    stop,
    reset,
};
