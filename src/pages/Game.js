'use strict';

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Alert,
    TouchableHighlight,
    Image,
    ScrollView,
    ListView
} from 'react-native';
import Swiper from 'react-native-swiper'
import FriendList from './FriendList';
import BottomLine from '../components/BottomLine';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';
import Spic from '../components/SwipePic';

const PIC_URL = 'http://school.coolmoresever.com/images/pic.jpeg';


export const world = require('../components/img/world.png');
export const zhiye = require('../components/img/zhiye.png');
export const daoju = require('../components/img/daoju.png');
export const putong = require('../components/img/putong.png');
export const bg_1 = require('../components/img/background/bg_1.jpg');
export const bg_2 = require('../components/img/background/bg_2.jpg');


class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'game'
        };
    }

    _press(o) {
        this.props.actions.changePage(o);
    }

    render() {

        return (
            <ScrollView style={{backgroundColor: '#dfdfdf', flex: 1}}>
                <Swiper style={styles.wrapper} height={200} autoplay>
                    <Spic pic='http://148.coolmoresever.com/Public/wemore/lb1.jpg' height={250}
                          url='http://148.coolmoresever.com/index.php?m=Home&c=Index&a=newsman&num=1'/>
                    <Spic pic='http://148.coolmoresever.com/Public/wemore/lb2.jpg' height={250}
                          url='http://148.coolmoresever.com/index.php?m=Home&c=Index&a=newsman&num=2'/>
                    <Spic pic='http://148.coolmoresever.com/Public/wemore/lb3.jpg' height={250}
                          url='http://148.coolmoresever.com/index.php?m=Home&c=Index&a=newsman&num=3'/>
                </Swiper>
                <View style={{flex: 1}}>
                    <View style={{height: 80, backgroundColor: '#fff', flexDirection: 'row'}}>
                        <View style={styles.buttonBox}>
                            <TouchableHighlight onPress={() => {
                                this._press('normal')
                            }}>
                                <Image source={putong}
                                       style={styles.image}></Image>
                            </TouchableHighlight>
                            <Text style={styles.text_2}>普通战</Text>
                        </View>
                        <View style={styles.buttonBox}>
                            <TouchableHighlight onPress={() => {
                                this._press('world-game')
                            }}>
                                <Image source={world}
                                       style={styles.image}></Image>
                            </TouchableHighlight>
                            <Text style={styles.text_2}>世界战</Text>
                        </View>
                        <View style={styles.buttonBox}>
                            <TouchableHighlight onPress={() => {
                                this._press('building')
                            }}>
                                <Image source={daoju}
                                       style={styles.image}></Image>
                            </TouchableHighlight>
                            <Text style={styles.text_2}>道具战</Text>
                        </View>
                        <View style={styles.buttonBox}>
                            <TouchableHighlight onPress={() => {
                                this._press('building')
                            }}>
                                <Image source={zhiye}
                                       style={styles.image}></Image>
                            </TouchableHighlight>
                            <Text style={styles.text_2}>职业战</Text>
                        </View>
                    </View>
                    <View style={{height: 1, backgroundColor: '#b7b7b7'}}/>
                    <View style={{height: 7}}/>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.picBox}>
                            <TouchableHighlight onPress={() => {
                                this._press('sucker')
                            }}>
                                <Image style={{height: 70, width: 170, justifyContent: 'center', alignItems: 'center'}}
                                       source={bg_1}/>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.picBox}>
                            <TouchableHighlight onPress={() => {
                                this._press('props')
                            }}>
                                <Image style={{height: 70, width: 170, justifyContent: 'center', alignItems: 'center'}}
                                       source={bg_2}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    marginLeft: 10,
                                    marginTop: 20,
                                    fontSize: 15,
                                    color: '#7f7f7f'
                                }}>好友排名</Text>
                        </View>
                        <FriendList/>
                    </View>
                </View>
                < BottomLine/>
            </ ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8bb2ce',
    },
    slide5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7da0b9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    image: {
        height: 40,
        width: 40,
        // borderRadius: 25,
    },
    text_2: {
        // fontWeight:'bold',
        color: '#454545'
    },
    picBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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

export default connect(select, mapDispatchToProps)(Game);