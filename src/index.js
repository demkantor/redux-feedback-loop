import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
//Redux 
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
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
const feelingReducer = (state = [], action) =>{
    switch (action.type){
        case 'SET_FEEL':
            return [...state, action.payload];
        case 'CLEAR_RESPONSE':
            return state = [];
        default: 
            return state;
    }
}
const understandingReducer = (state = [], action) =>{
    switch (action.type){
        case 'SET_UNDERSTAND':
            return [...state, action.payload];
        case 'CLEAR_RESPONSE':
            return state = [];
        default: 
            return state;
    }
}
const supportReducer = (state = [], action) =>{
    switch (action.type){
        case 'SET_SUPPORT':
            return [...state, action.payload];
        case 'CLEAR_RESPONSE':
            return state = [];
        default: 
            return state;
    }
}
const commentReducer = (state = [], action) =>{
    switch (action.type){
        case 'SET_COMMENT':
            return [...state, action.payload];
        case 'CLEAR_RESPONSE':
            return state = [];
        default: 
            return state;
    }
}
const storeInstance = createStore(
    combineReducers({
        responseReducer,
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();