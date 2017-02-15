import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TopTabBar extends Component {
    render() {
        return (
            <View >
                <View>
                    <View style={{height: 20,backgroundColor:'#228B22'}}/>
                </View>
                <View style={styles.row}>
                    <View style={{flex:2}}>

                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>我的</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>游戏</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>生活</Text>
                    </View>
                    <View style={{flex:2}}>

                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: '#008000'
    },
    box: {
        height: 52,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color:'#FFFFF0'
    }
});

module.exports = TopTabBar;