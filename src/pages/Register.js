'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, Alert, TouchableHighlight, Picker} from 'react-native';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import {regIn, goBackToLogin} from '../actions/user';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            name: '',
            password: '',
            re_password: '',
            team: '1',
        };
    }

    //
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.isRegister != this.props.isRegister && nextProps.isRegister === false) {
            this.toLogin();
            return false;
        }

        return true;
    }

    toLogin = () => {
        const {router} = this.props;
        router.toLogin();
    }

    goBack = () => {
        this.props.dispatch(goBackToLogin());
    }

    handleRegister = () => {
        if (this.state.re_password != this.state.password) {
            Alert.alert('两次输入密码不一致');
            return;
        }
        if(this.state.account ==''||this.state.password==''||this.state.re_password==''||this.state.name==''){
            Alert.alert('请填写所有资料');
            return;
        }
        let opt = {
            'acc': this.state.account,
            'pwd': this.state.password,
            'name': this.state.name,
            'team': this.state.team,
            // 'gender': this.state.gender,
        };
        this.props.dispatch(regIn(opt));
    }

    render() {
        var title = '注册';
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
                <NavBar title={title}/>
                <View style={{height: 1, backgroundColor: '#DCDCDC'}}/>
                <View>
                    <View style={styles.content}>
                        <TextInput
                            style={styles.TextInput}
                            autoCapitalize='none'
                            placeholder='请输入手机/邮箱/账号'
                            textAlign='center'
                            onChangeText={(account) => this.setState({account})}
                            underlineColorAndroid='transparent'
                        />
                        <View style={{height: 2}}/>
                        <TextInput
                            style={styles.TextInput}
                            autoCapitalize='none'
                            placeholder='用户名称'
                            textAlign='center'
                            onChangeText={(name) => this.setState({name})}
                            underlineColorAndroid='transparent'
                        />
                        <View style={{height: 2}}/>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.TextInput}
                            placeholder='密码'
                            autoCapitalize='none'
                            textAlign='center'
                            onChangeText={(password) => this.setState({password})}
                            underlineColorAndroid='transparent'
                        />
                        <View style={{height: 2}}/>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.TextInput}
                            placeholder='请重复输入密码'
                            autoCapitalize='none'
                            textAlign='center'
                            onChangeText={(re_password) => this.setState({re_password})}
                            underlineColorAndroid='transparent'
                        />
                        <View style={{alignItems: 'center', justifyContent: 'center', height: 50}}>
                            <Text style={{color: '#959595', fontSize: 20}}>----选择你的战队----</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Picker
                                style={{height: 200, width: 200}}
                                selectedValue={this.state.team}
                                onValueChange={team => this.setState({team: team})}>
                                <Picker.Item label="新力军" value="1"/>
                                <Picker.Item label="革命军" value="2"/>
                            </Picker>
                        </View>
                        <TouchableHighlight onPress={this.handleRegister} underlayColor="#52ABFF" style={styles.button}>
                            <Text style={{color: '#fff'}}>注册</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.goBack} underlayColor="#52ABFF" style={styles.button}>
                            <Text style={{color: '#fff'}}>后退</Text>
                        </TouchableHighlight>
                        <View style={{height: 50}}/>
                    </View>
                </View>
            </ScrollView>
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
        flex: 1
        // backgroundColor: '#FAFAFA'
    },
    font: {
        padding: 10,
        fontSize: 15,
    },
    TextInput: {
        height: 40,
        backgroundColor: '#fff',
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        borderColor: '#26c474',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#26c474'
    },
    thumbnail: {
        height: 250,
    },
    bottom: {
        padding: 10,
        height: 100,
    }
});

function select(store) {
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        isRegister: store.userStore.isRegister,
        user: store.userStore.user,
        status: store.userStore.status,
    }
}

export default connect(select)(Register);