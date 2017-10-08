'use strict';
import React from 'react';
import {Navigator} from 'react-native';


// Pages

import LoginPage from '../pages/Login';
import MainPage from '../pages/Main';
import WorldGame from '../pages/WorldGame';
import Building from '../pages/Building';
import SearchPage from  '../pages/Search';
import RegisterPage from '../pages/Register';


// Config
const sceneConfig = require('./sceneConfig')

const customFloatFromRight = sceneConfig.customFloatFromRight;


class Router {
    constructor(navigator) {
        this.navigator = navigator
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index + 1
        route.props = props
        route.index = nextIndex
        this.navigator.push(route)
    }


    pop() {
        this.navigator.pop()
    }

    toLogin(props) {
        this.push(props, {
            page: LoginPage,
            name: 'login-page',
            sceneConfig: customFloatFromRight
        })
    }

    toSearch(props){
        this.push(props, {
            page: SearchPage,
            name: 'search-page',
            sceneConfig: customFloatFromRight
        })
    }

    toMain(props) {
        this.push(props, {
            page: MainPage,
            name: 'main-page',
            sceneConfig: customFloatFromRight
        })
    }

    toRegister(props){
        this.push(props, {
            page: RegisterPage,
            name: 'register-page',
            sceneConfig: customFloatFromRight
        })
    }

    toWorldGame(props) {
        this.push(props, {
            page: WorldGame,
            name: 'world-game-page',
            sceneConfig: customFloatFromRight
        })
    }

    toBuilding(props) {
        this.push(props, {
            page: Building,
            name: 'building',
            sceneConfig: customFloatFromRight
        })
    }

    replaceWithHome() {
        this.navigator.popToTop()
    }

    resetToLogin() {
        this.navigator.resetTo({
            name: 'login-page',
            page: LoginPage,
            //sceneConfig: customFloatFromRight,
        })
    }


}

module.exports = Router

