'use strict';

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper'

export default class LifeSwiper extends Component {
    render(){
        return(
            <Swiper style={styles.wrapper} height={400} autoplay horizontal={false} showsPagination={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>轮播图1</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>轮播图2</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>轮播图3</Text>
                </View>
                <View style={styles.slide4}>
                    <Text style={styles.text}>轮播图4</Text>
                </View>
                <View style={styles.slide5}>
                    <Text style={styles.text}>轮播图5</Text>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8bb2ce',
    },
    slide5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7da0b9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});