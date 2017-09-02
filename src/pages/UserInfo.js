/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import {connect} from 'react-redux';

var {width, height} = Dimensions.get('window');
var long = width / 2;
var long_2 = width / 4;

export const friend = require('../components/img/menuButton/friend_black.png');

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 2, marginLeft: 15}}>
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
                        }}>我的资料</Text>
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
                        <View style={{flex: 1}}/>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{marginLeft: 25, flex: 1, justifyContent: 'center'}}>
                                <Text style={{color: '#565656'}}>所属军团</Text>
                            </View>
                            <View style={{marginLeft: long, flex: 1, justifyContent: 'center'}}>
                                <Text style={{color: '#565656'}}>{this.props.user.team_name}军</Text>
                            </View>
                        </View>
                        <View style={{height: 0.5, backgroundColor: '#464646', marginTop: 10}}/>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{marginLeft: 25, flex: 1, justifyContent: 'center'}}>
                                <Text style={{color: '#565656'}}>胜利</Text>
                            </View>
                            <View style={{marginLeft: long, flex: 1, justifyContent: 'center'}}>
                                <Text style={{color: '#565656'}}>{this.props.user.win_num}</Text>
                            </View>
                        </View>
                        <View style={{height: 0.5, backgroundColor: '#464646', marginTop: 10}}/>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{marginLeft: 25, flex: 1, justifyContent: 'center'}}>
                                <Text style={{color: '#565656'}}>失败</Text>
                            </View>
                            <View style={{marginLeft: long, flex: 1, justifyContent: 'center'}}>
                                <Text style={{color: '#565656'}}>{this.props.user.fail_num}</Text>
                            </View>
                        </View>
                        <View style={{height: 0.5, backgroundColor: '#464646', marginTop: 10}}/>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{marginLeft: 25, flex: 1, justifyContent: 'center'}}>
                                <Text style={{color: '#565656'}}>胜率</Text>
                            </View>
                            <View style={{marginLeft: long, flex: 1, justifyContent: 'center'}}>
                                <Text style={{color: '#565656'}}>{this.props.user.shenglv}%</Text>
                            </View>
                        </View>
                        <View style={{height: 0.5, backgroundColor: '#464646', marginTop: 10}}/>
                        <View style={{flex: 1}}/>
                    </View>
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
    }
});

export default connect(select)(UserInfo);