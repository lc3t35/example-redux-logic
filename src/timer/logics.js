import { createLogic } from 'redux-logic'
import { tick } from './actions'

const startLogic = createLogic({
  type: 'START',
  cancelType: ['STOP', 'RESET'],
  process ({ cancelled$ }, dispatch, done) {
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);
    cancelled$.subscribe(() => {
      clearInterval(interval);
    });
  }
});

export default [
  startLogic
];
