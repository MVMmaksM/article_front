import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import {customerReducer} from "./customerReducer"
import {articleReducer} from "./articleReducer.js";
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    cashReducer: cashReducer,
    customersReducer: customerReducer,
    articlesReducer: articleReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));