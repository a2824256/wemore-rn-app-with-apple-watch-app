'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert, TouchableHighlight, Image} from 'react-native';
import LifeSwiper from './LifeSwiper';

export default class Life extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <LifeSwiper/>
            </View>
        )
    }
}


const styles = StyleSheet.create({

});
