import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableHighlight,Alert} from 'react-native';

export const moreButtom = require('./img/more.png');

export default class BottomBar extends Component {

    click = () => {
        Alert.alert('更多功能敬请期待！');
        return;
    }

    render() {
        return (
            <View style={styles.row}>
                <View>
                    <View style={{height:1,backgroundColor: '#C9C9C9'}}/>
                </View>
                <View style={{alignItems: 'center',justifyContent: 'center',flex:1}}>
                    <TouchableHighlight onPress={this.click} underlayColor="#ffffff">
                        <Image source={moreButtom} style={styles.pic}/>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        height: 50,
        backgroundColor: '#ffffff',
    },
    pic: {
        height: 30,
        width: 30,
    }
});

module.exports = BottomBar;