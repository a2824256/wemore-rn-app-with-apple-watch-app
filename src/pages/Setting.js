/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Switch, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import SettingButton from '../components/SwitchButton';

var {width, height} = Dimensions.get('window');
var long = width / 2;
var long_2 = width / 4;

export const setting = require('../components/img/menuButton/setting_black.png');

class Setting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 2, marginLeft: 15}}>
                        <Image source={setting}
                               style={styles.image}/>
                    </View>
                    <View style={{flex: 10, justifyContent: 'center'}}>
                        <Text style={{
                            fontSize: 20,
                            marginBottom: 8,
                            alignSelf: 'stretch',
                            fontWeight: 'bold',
                            color: '#444444'
                        }}>设置</Text>
                    </View>
                </View>
                <View style={{flex: 7}}>
                    <View style={{
                        height: 0.5,
                        backgroundColor: '#959595',
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20
                    }}/>
                    <View style={styles.switch_button}>
                        <View style={styles.text_box}>
                            <Text style={styles.text}>新消息提醒</Text>
                        </View>
                        <View style={styles.button}>
                            <Switch value={false} disabled={false} thumbTintColor='#959595'/>
                        </View>
                    </View>
                    <View style={{height: 0.5, backgroundColor: '#959595', marginLeft: 20, marginRight: 20}}/>
                    <View style={styles.switch_button}>
                        <View style={styles.text_box}>
                            <Text style={styles.text}>通过电话号码查找</Text>
                        </View>
                        <View style={styles.button}>
                            <Switch value={true} disabled={false} thumbTintColor='#959595'/>
                        </View>
                    </View>
                    <View style={{height: 0.5, backgroundColor: '#959595', marginLeft: 20, marginRight: 20}}/>
                    <View style={styles.switch_button}>
                        <View style={styles.text_box}>
                            <Text style={styles.text}>接受游戏邀请</Text>
                        </View>
                        <View style={styles.button}>
                            <Switch value={true} disabled={false} thumbTintColor='#959595'/>
                        </View>
                    </View>
                    <View style={{height: 0.5, backgroundColor: '#959595', marginLeft: 20, marginRight: 20}}/>
                    <View style={styles.switch_button}>
                        <View style={styles.text_box}>
                            <Text style={styles.text}>接受优惠推送</Text>
                        </View>
                        <View style={styles.button}>
                            <Switch value={true} disabled={false} thumbTintColor='#959595'/>
                        </View>
                    </View>
                    <View style={{height: 0.5, backgroundColor: '#959595', marginLeft: 20, marginRight: 20}}/>
                    <View style={styles.switch_button}>
                        <View style={styles.text_box}>
                            <Text style={styles.text}>自动横屏模式</Text>
                        </View>
                        <View style={styles.button}>
                            <Switch value={false} disabled={false} thumbTintColor='#959595'/>
                        </View>
                    </View>
                    <View style={{height: 0.5, backgroundColor: '#959595', marginLeft: 20, marginRight: 20}}/>
                    <View style={styles.switch_button}>
                        <View style={styles.text_box}>
                            <Text style={styles.text}>声音</Text>
                        </View>
                        <View style={styles.button}>
                            <Switch value={false} disabled={false} thumbTintColor='#959595'/>
                        </View>
                    </View>
                    <View style={{height: 0.5, backgroundColor: '#959595', marginLeft: 20, marginRight: 20}}/>
                </View>
                <View style={{flex: 3, flexDirection: 'column'}}>
                    <View style={styles.setting_button_box}>
                        <Text style={styles.setting_button_text}>
                            流量统计
                        </Text>
                    </View>
                    <View style={styles.setting_button_box}>
                        <Text style={styles.setting_button_text}>
                            功能介绍
                        </Text>
                    </View>
                    <View style={styles.setting_button_box}>
                        <Text style={styles.setting_button_text}>
                            关于我们
                        </Text>
                    </View>
                    <View style={{flex: 2}}/>
                </View>
            </ScrollView>
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
    image_2: {
        height: long,
        width: long,
        borderRadius: long_2,
        marginLeft: long_2,
        marginTop: 25
    },
    switch_button: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    text_box: {
        flex: 3,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 30
    },
    text: {
        fontSize: 20,
        color: '#575757',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 40,
    },
    setting_button_text: {
        color: '#959595',
        marginLeft: 30,
    },
    setting_button_box: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 10
    },
});

export default connect(select)(Setting);