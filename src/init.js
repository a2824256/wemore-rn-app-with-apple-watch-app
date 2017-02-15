import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import MyScene from './MyScene';

class rn_learning extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
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