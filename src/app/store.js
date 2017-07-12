/**
 * Created by Caique on 06/07/2017.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(reducer, middleware);