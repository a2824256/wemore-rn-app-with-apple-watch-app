import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NavBar extends Component {
    render() {
        return (
            <View>
                <View style={styles.Bar}>
                    <View style={{height: 20}}/>
                    <Text style={{color:'#696969',fontSize:17}}>{this.props.title}</Text>
                </View>
                <View style={{height:2,backgroundColor:'#DCDCDC'}}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    Bar: {
        height: 52,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

module.exports = NavBar;