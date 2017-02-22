'use strict';


import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';
import debug from 'debug';

const logger = store => next => action => {
    if(typeof action === 'function') console.log('dispatching a function');
    else debug('dispatching', action);
    let result = next(action);
    debug('next state', store.getState());
    return result;
}

let middlewares = [
    logger,
    thunk
];

let createAppStore = applyMiddleware(...middlewares)(createStore);


export default function configureStore(onComplete: ()=>void){
    const store = autoRehydrate()(createAppStore)(reducers);
    let opt = {
        storage: AsyncStorage,
        transform: [],
        blacklist: ['userStore'],
    };
    persistStore(store, opt, onComplete);

    return store;
}