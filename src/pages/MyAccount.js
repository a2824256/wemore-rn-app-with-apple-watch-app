/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableHighlight, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../actions/user';
var {width, height} = Dimensions.get('window');
var long = width / 2;
var long_2 = width / 4;

export const friend = require('../components/img/menuButton/friend_black.png');

class MyAccount extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout = () => {
        this.props.dispatch(logOut());
    }

    render() {
        return (
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 2,marginLeft:15}}>
                        <Image source={friend}
                               style={styles.image}></Image>
                    </View>
                    <View style={{flex: 10, justifyContent: 'center'}}>
                        <Text style={{
                            fontSize: 20,
                            marginBottom: 8,
                            alignSelf: 'stretch',
                            fontWeight: 'bold',
                            color: '#444444'
                        }}>我的账户</Text>
                    </View>
                </View>
                <View style={{flex: 9}}>
                    <View style={{flex: 1}}>
                        <View>
                            <Image source={{uri: this.props.user.touxiang_url}}
                                   style={styles.image_2}></Image>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 25
                        }}>
                            <Text style={{
                                fontSize: 20,
                                marginBottom: 8,
                                fontWeight: 'bold',
                                color: '#444444',
                            }}>{this.props.user.name}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableHighlight onPress={this.handleLogout}>
                            <View style={styles.button}>
                                <Text style={{color:'#00ab8f'}}>切换账户</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

function select(store) {
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
        status: store.userStore.status,
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
        marginLeft:70,
        marginRight: 70,
        borderColor: '#00ab8f',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default connect(select)(MyAccount);