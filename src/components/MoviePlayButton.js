import React, {Component} from 'react';
import {View, Alert, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';
export const PLAY = require('./img/play.png');

class MoviePlayButton extends Component {
    constructor(props) {
        super(props);
    }

    _press(o) {
        this.props.actions.changePage(o);
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => {
                    this._press('textpage');
                }} underlayColor="#e1e1e1">
                    <Image source={PLAY} style={{height: 40, width: 40, marginRight: 20}}/>
                </TouchableHighlight>
            </View>
        )
    }
}


function select(store) {
    return {
        user: store.userStore.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(select, mapDispatchToProps)(MoviePlayButton);