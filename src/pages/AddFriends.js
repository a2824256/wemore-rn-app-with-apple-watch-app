/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions, ScrollView, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';
import FS from './FriendSearch';

var {width, height} = Dimensions.get('window');
var long = width / 2;
var long_2 = width / 4;

export const friend = require('../components/img/menuButton/friend_black.png');

class AddFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentWillMount(){
        this._search();
    }

    _press(o) {
        this.props.actions.changePage(o);
    }

    _search() {
        this.props.actions.searchFriend(this.state.text);
    }

    render() {
        return (
            <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 2, justifyContent: 'center', height: 50}}>
                    <Text style={{textAlign: 'center', color: '#2e2e2e', fontSize: 20}}>查找好友</Text>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 4}}>
                        <TextInput style={styles.textInput}
                                   placeholder="输入关键字搜索" underlineColorAndroid='transparent'
                                   placeholderTextColor="#959595"
                                   onChangeText={(text) => this.setState({text})}/>
                    </View>
                    <View style={{flex: 4, flexDirection: 'row'}}>
                        <TouchableHighlight onPress={() => {
                            this._search()
                        }} underlayColor="#fff">
                            <View style={styles.commit_button}>
                                <Text style={{color: '#fff', textAlign: 'center'}}>查找</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                            this._press('friend')
                        }} underlayColor="#fff">
                            <View style={styles.commit_button}>
                                <Text style={{color: '#fff', textAlign: 'center'}}>后退</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{marginTop:10,height: 0.5, backgroundColor: '#959595'}}/>
                <View style={{flex: 7}}>
                    <FS/>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    textInput: {
        height: 32,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#959595',
        borderRadius: 8,
        fontSize: 10
    },
    commit_button: {
        width: 60,
        height: 30,
        backgroundColor: '#26c474',
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 7
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

export default connect(select, mapDispatchToProps)(AddFriends);