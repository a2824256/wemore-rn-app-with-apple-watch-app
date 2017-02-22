'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './stores/index';

let store = configureStore();

import Root from './root';


export default class App extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: false,
            store: configureStore(()=>{this.setState({isLoading: false})})
        }
    }
    render(){
        if(this.state.isLoading){
            return null;
        }
        return (
            <Provider store={this.state.store}>
                <Root />
            </Provider>
        )
    }
}

