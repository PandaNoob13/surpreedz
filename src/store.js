import {combineReducers, createStore, compose,applyMiddleware } from "redux";
import orderDetailReducer from "./features/OrderDetailPage/state/OrderDetailReducer";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    orderDetailReducer
})

export const setupStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
}
