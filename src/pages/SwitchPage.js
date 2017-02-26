import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Game from './Game';
import Mine from './Mine';
import Life from './Life';

class SwitchPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.page) {
            case 'life':
                return (
                    <View style={{flex:1}}>
                        <Life/>
                    </View>
                );
                break;
            case 'mine':
                return (
                    <View style={{flex:1}}>
                        <Mine/>
                    </View>
                );
                break;
            default:
                return (
                    <View style={{flex:1}}>
                        <Game/>
                    </View>
                );
                break;
        }
    }
}



function select(store) {
    return {
        page: store.mainStore.status,
    }
}

export default connect(select)(SwitchPage);