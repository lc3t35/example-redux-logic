import { createLogic } from "redux-logic";
import { tick } from "./actions";
import types from "./types";

const startLogic = createLogic( {
    type: types.START,
    cancelType: [ types.STOP, types.RESET ],
    process ( { cancelled$ }, dispatch, done ) {
        const interval = setInterval( () => {
            dispatch( tick() );
        }, 1000 );
        cancelled$.subscribe( () => {
            clearInterval( interval );
        } );
    },
} );

export default [
    startLogic,
];
