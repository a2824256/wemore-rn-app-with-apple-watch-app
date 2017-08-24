/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';
import {connect} from 'react-redux';

export const daoju = require('../components/img/putong.png');
export const fresh = require('../components/img/fresh.png');
export const timer = require('../components/img/timer.png');

class PropsShop extends Component {
    constructor(props) {
        super(props);
    }

    _press(o) {
        Alert.alert('商品内测中！')
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 2}}>
                        <Image source={daoju}
                               style={styles.image}></Image>
                    </View>
                    <View style={{flex: 10, justifyContent: 'center'}}>
                        <Text style={{
                            fontSize: 20,
                            marginBottom: 8,
                            alignSelf: 'stretch',
                            fontWeight: 'bold',
                            color: '#444444'
                        }}>道具城</Text>
                    </View>
                </View>
                <View style={{flex: 8, flexDirection: 'column'}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 1, marginLeft: 30}}>
                            <Image source={fresh}
                                   style={{height: 100, width: 100, borderWidth: 2, borderColor: '#cccccc',}}></Image>
                        </View>
                        <View style={{flex: 2, flexDirection: 'column'}}>
                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    marginBottom: 8,
                                    fontWeight: 'bold',
                                    color: '#0f0f0f'
                                }}>阵型转换</Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 10,
                                    marginBottom: 8,
                                    fontWeight: 'bold',
                                    color: '#5b5b5b'
                                }}>使用后可改变一次自己所对应的军团</Text>
                            </View>
                            <View>
                                <TouchableHighlight  onPress={() => {
                                    this._press(this.props.thisPage)}} underlayColor="#fff">
                                    <Text style={
                                        {textAlign:'right',color: '#018d73',marginRight:15}
                                    }>购买</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 1, marginLeft: 30}}>
                            <Image source={timer}
                                   style={{height: 100, width: 100, borderWidth: 2, borderColor: '#cccccc',}}></Image>
                        </View>
                        <View style={{flex: 2, flexDirection: 'column'}}>
                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    marginBottom: 8,
                                    fontWeight: 'bold',
                                    color: '#0f0f0f'
                                }}>加速器</Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 10,
                                    marginBottom: 8,
                                    fontWeight: 'bold',
                                    color: '#5b5b5b'
                                }}>普通战/世界战时使用可减少两分钟等待时间</Text>
                            </View>
                            <View>
                                <TouchableHighlight  onPress={() => {
                                    this._press(this.props.thisPage)}} underlayColor="#fff">
                                    <Text style={
                                        {textAlign:'right',color: '#018d73',marginRight:15}
                                    }>购买</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

function select(store) {
    return {
        user: store.userStore.user,
    }
}

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        justifyContent: 'center',
    },
});

export default connect(select)(PropsShop);