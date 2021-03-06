import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableHighlight, Dimensions, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';
var {width, height} = Dimensions.get('window');

export const moreButtom = require('./img/more.png');
export const closeButtom = require('./img/close.png');
export const sao = require('./img/bottom/sao.png');
export const qrcode = require('./img/bottom/qrcode.png');
export const quick = require('./img/bottom/quick.png');

class BottomBar extends Component {

    constructor(props) {
        super(props);
    }

    _press(o) {
        this.props.actions.changeBottom(o);
    }

    _press2change(o) {
        this.props.actions.changePage(o);
    }

    render() {
        switch (this.props.status) {
            case 'close':
                return (
                    <View style={styles.row}>
                        <View>
                            <View style={{height: 1, backgroundColor: '#fefefe'}}/>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                            <TouchableHighlight onPress={() => {
                                this._press('open')
                            }} underlayColor="#ffffff">
                                <Image source={moreButtom} style={styles.pic}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                )
                break;
            default:
                return (
                    <View style={styles.row_open}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10
                            }}>
                                <TouchableHighlight onPress={() => {
                                    this._press2change('world-game')
                                }} underlayColor="#ffffff">
                                <View style={{marginRight: 30, flexDirection: 'column'}}>
                                    <Image source={quick} style={{height: width / 6, width: width / 6}}/>
                                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={styles.text}>快速游戏</Text>
                                    </View>
                                </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor="#ffffff">
                                <View style={{flexDirection: 'column'}}>
                                    <Image source={sao} style={{height: width / 6, width: width / 6}}/>
                                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={styles.text}>扫一扫</Text>
                                    </View>
                                </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => {
                                    this._press2change('userinfo')
                                }} underlayColor="#ffffff">
                                <View style={{marginLeft: 30, flexDirection: 'column'}}>
                                    <Image source={qrcode} style={{height: width / 6, width: width / 6}}/>
                                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={styles.text}>我的名片</Text>
                                    </View>
                                </View>
                                </TouchableHighlight>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 140 - width / 6 - 42,
                                // backgroundColor:'#123'
                            }}>
                                <TouchableHighlight onPress={() => {
                                    this._press('close')
                                }} underlayColor="#ffffff">
                                    <Image source={closeButtom} style={styles.pic}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                )
                break;
        }
    }
}

const styles = StyleSheet.create({
    row: {
        height: 50,
        backgroundColor: '#ffffff',
    },
    pic: {
        height: 30,
        width: 30,
        marginBottom: 5
    },
    row_open: {
        height: 160,
        zIndex:9999
    },
    text: {
        color: '#00967d',
        fontSize: 10
    }
});

function select(store) {
    return {
        status: store.bottomStore.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(select, mapDispatchToProps)(BottomBar);