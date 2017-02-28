import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';


export const userPic = require('./img/menuButton/user.png');
export const friendPic = require('./img/menuButton/friend.png');
export const logoutPic = require('./img/menuButton/logout.png');
export const messagePic = require('./img/menuButton/message.png');
export const pursePic = require('./img/menuButton/purse.png');
export const settingPic = require('./img/menuButton/setting.png');

class Menu extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#009999',flex:1}}>
                <View style={{flex:2}}>
                    <View style={{flex:4}}/>
                    <View style={{flex:6,alignItems: 'center',justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row',alignSelf: 'stretch'}}>
                            <View style={styles.box_1}/>
                            <View><Image source={{uri:this.props.user.touxiang_url}}
                                         style={{height:50,width:50,borderRadius:25}}></Image></View>
                            <View style={styles.box_1}/>
                            <View style={{alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={{color:'#fff'}}>{this.props.user.name}</Text></View>
                            <View style={styles.box_2}/>
                            <View style={styles.center}>
                                <Image source={require('./img/male.png')} style={{height:15,width:15}}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={{height:0.5,backgroundColor:'#fdfdfd'}}/>
                </View>
                <View style={{flex:8}}>
                    <View style={{flexDirection: 'column',alignSelf: 'stretch',marginTop:20}}>
                        <View style={styles.buttonBox}>
                            <View style={styles.box_2}/>
                            <Image source={userPic} style={styles.buttonImage}/>
                            <View style={styles.box_2}/>
                            <View style={styles.center}>
                                <Text style={styles.text}>我的资料</Text>
                            </View>
                        </View>
                        <View style={styles.buttonBox}>
                            <View style={styles.box_2}/>
                            <Image source={messagePic} style={styles.buttonImage}/>
                            <View style={styles.box_2}/>
                            <View style={styles.center}>
                                <Text style={styles.text}>我的消息</Text>
                            </View>
                        </View>
                        <View style={styles.buttonBox}>
                            <View style={styles.box_2}/>
                            <Image source={friendPic} style={styles.buttonImage}/>
                            <View style={styles.box_2}/>
                            <View style={styles.center}>
                                <Text style={styles.text}>我的好友</Text>
                            </View>
                        </View>
                        <View style={styles.buttonBox}>
                            <View style={styles.box_2}/>
                            <Image source={pursePic} style={styles.buttonImage}/>
                            <View style={styles.box_2}/>
                            <View style={styles.center}>
                                <Text style={styles.text}>我的账户</Text>
                            </View>
                        </View>
                        <View style={styles.buttonBox}>
                            <View style={styles.box_2}/>
                            <Image source={settingPic} style={styles.buttonImage}/>
                            <View style={styles.box_2}/>
                            <View style={styles.center}>
                                <Text style={styles.text}>设置</Text>
                            </View>
                        </View>
                        <View style={styles.buttonBox}>
                            <View style={styles.box_2}/>
                            <Image source={logoutPic} style={styles.buttonImage}/>
                            <View style={styles.box_2}/>
                            <View style={styles.center}>
                                <Text style={styles.text}>切换账号</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box_1: {
        width: 20,
    },
    box_2: {
        width: 15,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    },
    buttonBox: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 7
    },
    buttonImage:{
        height:40,
        width:40
    }
})

function select(store) {
    return {
        user: store.userStore.user,
    }
}

export default connect(select)(Menu);