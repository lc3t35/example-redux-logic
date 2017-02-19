import { connect } from "react-redux";
import { Timer } from "./components";
import * as actions from "./actions";
import { getFormattedTime, getStatus } from "./reducer";

export reducer from "./reducer";
export logics from "./logics";

export const View = connect(
    state => ( {
        time: getFormattedTime( state ),
        status: getStatus( state ),
    } ),
    actions,
)( Timer );

export { default as timerOperations } from "./operations";
