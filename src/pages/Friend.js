/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';
import FP from './FriendPage';

var {width, height} = Dimensions.get('window');
var long = width / 2;
var long_2 = width / 4;

export const friend = require('../components/img/menuButton/friend_black.png');

class Friend extends Component {
    constructor(props) {
        super(props);
    }

    _press(o) {
        this.props.actions.changePage(o);
    }

    render() {
        return (
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 1, marginLeft: 15}}>
                        <Image source={friend}
                               style={styles.image}></Image>
                    </View>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                        <Text style={{
                            fontSize: 16,
                            marginBottom: 8,
                            alignSelf: 'flex-start',
                            fontWeight: 'bold',
                            color: '#444444',
                            marginLeft: 8
                        }}>我的好友</Text>
                    </View>
                    <View style={{flex: 4, flexDirection: 'row'}}>
                        <TouchableHighlight onPress={() => {
                            this._press('add-friends')
                        }} underlayColor="#fff">
                            <View style={styles.add_friends_button}>
                                <Text style={{color: '#fff', textAlign: 'center'}}>添加好友</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                            this._press('friend-request')
                        }} underlayColor="#fff">
                            <View style={styles.add_friends_button}>
                                <Text style={{color: '#fff', textAlign: 'center'}}>好友请求</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{flex: 9}}>
                    <FP/>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        justifyContent: 'center',
    },
    image_2: {
        height: long,
        width: long,
        borderRadius: long_2,
        marginLeft: long_2,
        marginTop: 25
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        padding: 10,
        marginLeft: 70,
        marginRight: 70,
        borderColor: '#00ab8f',
        borderWidth: 1,
        borderRadius: 5,
    },
    add_friends_button: {
        borderColor: '#00ab8f',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#00ab8f',
        height: 30,
        justifyContent: 'center',
        marginRight: 10
    }
});

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

export default connect(select, mapDispatchToProps)(Friend);