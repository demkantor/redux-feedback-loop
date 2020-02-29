import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
//Redux 
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const responseReducer = (state = [], action) =>{
    switch (action.type){
        case 'SET_RESPONSE':
            return [...state, action.payload];
        case 'CLEAR_RESPONSE':
            return state = [];
        default: 
            return state;
    }
}

const databaseReducer = (state = [], action) =>{
    switch (action.type){
        case 'GET_INFO':
            return [...state, action.payload];
        case 'DISPLAY_DATABASE':
            return state;
        default: 
            return state;
    }
}


const storeInstance = createStore(
    combineReducers({
        responseReducer,
        databaseReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();