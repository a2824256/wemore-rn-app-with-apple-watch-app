'use strict';

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import Spic from '../components/SwipePic';

export default class LifeSwiper extends Component {
    render(){
        return(
            <Swiper style={styles.wrapper} height={400} autoplay horizontal={false} showsPagination={false}>
                <Spic pic='http://148.coolmoresever.com/Public/wemore/life1.jpeg' height={400} url='http://148.coolmoresever.com/index.php?m=Home&c=Index&a=lifeman&num=1'/>
                <Spic pic='http://148.coolmoresever.com/Public/wemore/life2.jpeg' height={400} url='http://148.coolmoresever.com/index.php?m=Home&c=Index&a=lifeman&num=2'/>
                <Spic pic='http://148.coolmoresever.com/Public/wemore/life3.jpeg' height={400} url='http://148.coolmoresever.com/index.php?m=Home&c=Index&a=lifeman&num=3'/>
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