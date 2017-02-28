import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


export default class MenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let userPic = require(this.props.pic);
        return (
            <View style={styles.Box}>
                <Image source={userPic} style={styles.Image}/>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    Image: {
        height:50,
        width:50
    }
});

module.exports = MenuButton;