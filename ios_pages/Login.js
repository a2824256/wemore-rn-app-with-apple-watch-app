import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert, TouchableHighlight, Image} from 'react-native';
import NavBar from './components/NavBar';
//登录接口
const LOGIN_URL = 'http://localhost:3000/account/login';
//图片地址
const PIC_URL = 'http://school.coolmoresever.com/images/pic.jpeg';


// class NavigatorBar extends Component {
//     render() {
//         return (
//             <View style={styles.Bar}>
//                 <text>{this.props.name}</text>
//             </View>
//         )
//     }
// }

export default class Login extends Component {
    // static propTypes = {
    // title: PropTypes.string.isRequired,
    // onForward: PropTypes.func.isRequired,
    // onBack: PropTypes.func.isRequired,
    // }


    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: ''
        };
    }

    checkInput = () => {
        if (this.state.account == '' || this.state.password == '') {
            Alert.alert('账号或密码不能为空！！');
            return true;
        }
        return false;
    }

    submitInput = () => {
        if (this.checkInput()) {
            return;
        }
        this.fetchData();
    }

    fetchData() {
        fetch(LOGIN_URL + '/' + this.state.account + '/' + this.state.password, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.status) {
                    //TODO
                    //登录成功
                    Alert.alert(responseData.info);
                    return;
                }
                //登录失败
                Alert.alert(responseData.info);
            });
    }


    render() {
        var pic_url = PIC_URL;
        var title = '登录';
        return (
            <View style={{flex: 1,backgroundColor: '#F5F5F5'}}>
                <NavBar title={title}/>
                <Image
                    resizeMode={Image.resizeMode.stretch}
                    style={styles.thumbnail}
                    source={{uri:pic_url}}
                />
                <View style={{height:1,backgroundColor:'#DCDCDC'}}/>
                <View style={{flex:1}}>
                    <View style={styles.content}>
                        <TextInput
                            style={styles.TextInput}
                            autoCapitalize='none'
                            placeholder='请输入手机/邮箱/账号'
                            textAlign='center'
                            onChangeText={(account) => this.setState({account})}
                        />
                        <View style={{height:2}}/>
                        <TextInput
                            password={true}
                            style={styles.TextInput}
                            placeholder='密码'
                            autoCapitalize='none'
                            textAlign='center'
                            onChangeText={(password) => this.setState({password})}
                        />
                        <TouchableHighlight onPress={this.submitInput} underlayColor="#52ABFF" style={styles.button}>
                            <Text style={{color: '#fff'}}>登录</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.Copyright}>
                    <View style={{flex:4}}>
                    </View>
                    <View style={{flex:1}}>
                        <Text>copyright (c) 2017 by Alex Leung</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    pic: {
        padding: 100,
        backgroundColor: '#99ffcc'
    },
    content: {
        marginTop: 10,
        height: 35,
        backgroundColor: '#FAFAFA'
    },
    font: {
        padding: 10,
        fontSize: 15,
    },
    TextInput: {
        height: 40,
        backgroundColor: '#fff'
    },
    Copyright: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#4169E1'
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        borderColor: '#57B0FF',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#63B8FF'
    },
    thumbnail: {
        height: 250,
    },
    bottom: {
        padding: 10,
        height: 100,
    }
});