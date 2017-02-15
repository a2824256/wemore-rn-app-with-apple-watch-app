import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert, TouchableHighlight, Image} from 'react-native';
import TopTabBar from './components/TopTabBar';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: ''
        };
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            account: this.props.account
        });
    }

    render() {
        return (
            <View>
                <TopTabBar></TopTabBar>
                <View></View>
            </View>
        );
    }
}