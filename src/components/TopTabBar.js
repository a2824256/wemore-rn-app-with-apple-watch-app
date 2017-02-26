'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';
import {connect} from 'react-redux';
import ManageBox from './ManageBox';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';


//顶部栏
class TopTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'game',
            count: 0
        };
        this._press = this._press.bind(this);
    }


    _press(type) {
        if (type == this.props.sideBarStatus) {
            return;
        }
        this.props.actions.changeSideBar(type);
    }


    render() {
        return (
            <View >
                <View>
                    <View style={{height: 20,backgroundColor:'#228B22'}}/>
                </View>
                <View style={styles.row}>
                    <View style={{flex:2}}>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{height:20,width:30}}>
                                <TouchableHighlight onPress={()=>this._press('left')} underlayColor="#008000">
                                    <Image source={require('./img/select.png')} style={styles.left_box}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={styles.box}/>
                    <ManageBox status={this.state.page} selectPage={this.selectPage}/>
                    <View style={styles.box}/>
                    <View style={{flex:2}}>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{height:20,width:30}}>
                                <TouchableHighlight onPress={()=>this._press('right')} underlayColor="#008000">
                                    <Image source={require('./img/search.png')} style={styles.right_box}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: '#008000'
    },
    row_box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },
    box: {
        height: 52,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#cacabc'
    },
    high_text: {
        textDecorationLine: 'underline',
        color: '#f6fdff',
    },
    touch_high: {
        marginTop: 20,
    },
    left_box: {
        height: 20,
        resizeMode: 'contain',
        marginLeft: -30
    },
    right_box: {
        height: 25,
        resizeMode: 'contain',
        marginLeft: -10
    }
});

function select(store) {
    return {
        status: store.mainStore.status,
        sideBarStatus: store.sideBarStore.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(select, mapDispatchToProps)(TopTabBar);
