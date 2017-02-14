import React, {Component} from 'react';
import {NavigatorIOS, AppRegistry, Navigator, Text, View} from 'react-native';

import Login from './ios_pages/Login';

class rn_learning extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: '登录', index: 0 }}
                configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
                renderScene={(route, navigator) =>
          <Login
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: '首页',
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
            />
        )
    }
}


AppRegistry.registerComponent('rn_learning', () => rn_learning);