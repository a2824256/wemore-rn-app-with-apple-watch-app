'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableHighlight, Image, ScrollView, ART} from 'react-native';
import UIBG from './UserInfoBackGround';
import {connect} from 'react-redux';
import MovieList from './MovieList';
import BottomLine from '../components/BottomLine';

export const bg_1 = require('../components/img/background/bg_4.jpg');
export const bg_2 = require('../components/img/background/bg_5.jpg');

class Mine extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#dfdfdf'}}>
                <UIBG/>
                <View style={{height:160,backgroundColor:'#fff',flexDirection:'column'}}>
                    <View style={styles.button_box}>
                        <View style={styles.box}>
                            <Image source={bg_1} style={styles.picture}>
                                <View style={styles.pic_box}>
                                    <Text style={styles.box_main_text}>{this.props.user.win_num}</Text>
                                    <View style={styles.info_box}>
                                        <Text style={styles.box_info_text}>
                                            胜利
                                        </Text>
                                        <View style={{height:20}}/>
                                        <Text style={styles.box_info_text}>
                                            场
                                        </Text>
                                    </View>
                                </View>
                            </Image>
                        </View>
                        <View style={styles.box}>
                            <Image source={bg_2} style={styles.picture}>
                                <View style={styles.pic_box}>
                                    <Text style={styles.box_main_text}>{this.props.user.fail_num}</Text>
                                    <View style={styles.info_box}>
                                        <Text style={styles.box_info_text}>
                                            失败
                                        </Text>
                                        <View style={{height:20}}/>
                                        <Text style={styles.box_info_text}>
                                            场
                                        </Text>
                                    </View>
                                </View>
                            </Image>
                        </View>
                    </View>
                    <View style={styles.button_box}>
                        <View style={styles.box}>
                            <Image source={bg_1} style={styles.picture}>
                                <View style={styles.pic_box}>
                                    <Text style={styles.box_main_text}>{this.props.user.shenglv}</Text>
                                    <View style={styles.info_box}>
                                        <Text style={styles.box_info_text}>
                                            胜率
                                        </Text>
                                        <View style={{height:20}}/>
                                        <Text style={styles.box_info_text}>
                                            %
                                        </Text>
                                    </View>
                                </View>
                            </Image>
                        </View>
                        <View style={styles.box}>
                            <Image source={bg_2} style={styles.picture}>
                                <View style={styles.pic_box}>
                                    <Text style={styles.team_name}>{this.props.user.team_name}</Text>
                                    <View style={styles.info_box}>
                                        <Text style={styles.box_info_text}>
                                            所属
                                        </Text>
                                        <View style={{height:20}}/>
                                        <Text style={styles.box_info_text}>
                                            军
                                        </Text>
                                    </View>
                                </View>
                            </Image>
                        </View>
                    </View>
                </View>
                <MovieList/>
                <BottomLine/>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    button_box: {
        flex: 1,
        flexDirection: 'row'
    },
    picture: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: 65,
        width: 175,

    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pic_box: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    info_box: {
        marginRight: 10
    },
    box_main_text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 60,
        marginRight: 40
    },
    team_name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 50,
        marginRight: 20,
    },
    box_info_text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12
    }
});

function select(store) {
    return {
        user: store.userStore.user,
    }
}

export default connect(select)(Mine);
