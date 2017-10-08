'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';


//单粒按钮
class TabButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this._press = this._press.bind(this);
    }

    _press(o) {
        this.props.actions.changePage(o);
    }

    render() {
        if (this.props.page == this.props.thisPage) {
            return (
                <View style={styles.row_box}>
                    <TouchableHighlight style={styles.touch_high} onPress={()=>{this._press(this.props.thisPage)}}
                                        underlayColor="#009999">
                        <Text style={styles.high_text}>{this.props.name}</Text>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View style={styles.row_box}>
                    <TouchableHighlight style={styles.touch_high} onPress={()=>{this._press(this.props.thisPage)}}
                                        underlayColor="#009999">
                        <Text style={styles.text}>{this.props.name}</Text>
                    </TouchableHighlight>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    row_box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
    },
    text: {
        color: '#cacabc',
        fontSize: 17
    },
    high_text: {
        // textDecorationLine: 'underline',
        color: '#f6fdff',
        fontSize: 20
    },
    touch_high: {
        marginTop: 20,
        // backgroundColor:'#5db6ff',
        height:54,
        width:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

function select(store) {
    return {
        page: store.mainStore.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(select, mapDispatchToProps)(TabButton);