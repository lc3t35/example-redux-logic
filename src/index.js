import 'babel-polyfill'
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { Provider } from 'react-redux'
import * as timer from './timer'

const logicMiddleware = createLogicMiddleware(timer.logics)
const createStoreWithMiddleware = applyMiddleware(logicMiddleware)(createStore)

const store = createStoreWithMiddleware(timer.reducer)

const Root = () => (
  <Provider store={store}>
    <timer.View/>
  </Provider>
)

ReactDOM.render(<Root/>, document.getElementById('root'))
