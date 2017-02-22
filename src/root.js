
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { connect } from 'react-redux';
import Router from './configs/router';

import LoginPage from './pages/Login';
import MainPage from './pages/Main';

let initialRoute = {
    name: 'login-page',
    page: LoginPage,
}

class Root extends Component {
    constructor(props){
        super(props);
        if(props.isLoggedIn){
            initialRoute = {
                name: 'main-page',
                page: MainPage
            }
        }
    }

    renderScene({page, name, id, index, props}, navigator){
        this.router = this.router || new Router(navigator);
        if(page){
            return React.createElement(page, {
                ...props,
                ref: view => this[index] = view,
                router: this.router,
                name,
                route: {
                    name,  id,  index
                }
            })
        }
    }

    configureScene(route){
        if(route.sceneConfig){
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

    render() {
        return (<Navigator
            ref={view => this.navigator=view}
            initialRoute={initialRoute}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
        />);
    }
}


function select(store){
    return {
        isLoggedIn: store.userStore.isLoggedIn
    }
}


export default connect(select)(Root);
