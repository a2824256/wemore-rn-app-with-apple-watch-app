import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import Game from './Game';
import Mine from './Mine';
import Life from './Life';
import WorldGame from  './WorldGame';
import Building from './Building';
import NormalGame from './NormalGame';

class SwitchPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.page) {
            case 'life':
                return (
                    <View style={{flex: 1}}>
                        <Life/>
                    </View>
                );
                break;
            case 'mine':
                return (
                    <View style={{flex: 1}}>
                        <Mine/>
                    </View>
                );
                break;
            case 'world-game':
                return (
                    <View style={{flex: 1}}>
                        <WorldGame/>
                    </View>
                );
            case 'building':
                return (
                    <Building/>
                );
            case 'normal':
                return(
                    <NormalGame/>
                );
            default:
                return (
                    <View style={{flex: 1}}>
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