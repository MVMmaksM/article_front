import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import {customerReducer} from "./customerReducer"

const rootReducer = combineReducers({
    cashReducer: cashReducer,
    customersReducer: customerReducer
});

export const store = createStore(rootReducer);