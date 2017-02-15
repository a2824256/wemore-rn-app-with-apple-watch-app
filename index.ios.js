import React, {Component} from 'react';
import {AppRegistry, Navigator, Text, View} from 'react-native';

import Login from './src/Login';

class rn_learning extends Component {
    render() {
        var defaultName = '登录';
        var defaultComponent = Login;
        return (
            //导航器
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
        }}
                renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
        }}/>
        )
    }
}


AppRegistry.registerComponent('rn_learning', () => rn_learning);