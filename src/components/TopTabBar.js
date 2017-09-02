'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';
import {connect} from 'react-redux';
import ManageBox from './ManageBox';


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
        this.props.callback(type);
    }


    render() {
        return (
            <View >
                <View>
                    <View style={{height: 20,backgroundColor:'#009999'}}/>
                </View>
                <View style={styles.row}>
                    <View style={{flex:2}}>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{height:30,width:30}}>
                                <TouchableHighlight onPress={()=>this._press('left')} underlayColor="#009999">
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
                            <View style={{height:30,width:30}}>
                                <TouchableHighlight onPress={()=>this._press('right')} underlayColor="#009999">
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
        backgroundColor: '#009999'
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
        height: 30,
        width: 30,
        resizeMode: 'contain',
        // marginLeft: -30
    },
    right_box: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        // marginLeft: -10
    }
});

function select(store) {
    return {
        status: store.mainStore.status,
    }
}

export default connect(select)(TopTabBar);