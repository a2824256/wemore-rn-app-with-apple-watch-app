'use strict';
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import {connect} from 'react-redux';
import TabButton from './TabButton';

//管理按钮的盒子
class ManageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'game'
        }
    }

    render() {
        return (
            <View style={{flex:6,flexDirection: 'row'}}>
                <TabButton name="我的" thisPage='mine' nowPage={this.props.page}/>
                <TabButton name="游戏" thisPage='game' nowPage={this.props.page}/>
                <TabButton name="生活" thisPage='life' nowPage={this.props.page}/>
            </View>
        )
    }
}

function select(store) {
    return {
        page: store.mainStore.status,
    }
}

export default connect(select)(ManageBox);
