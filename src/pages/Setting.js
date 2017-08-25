/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
var {width, height} = Dimensions.get('window');
var long = width / 2;
var long_2 = width / 4;

export const setting = require('../components/img/menuButton/setting_black.png');

class Setting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 2,marginLeft:15}}>
                        <Image source={setting}
                               style={styles.image}></Image>
                    </View>
                    <View style={{flex: 10, justifyContent: 'center'}}>
                        <Text style={{
                            fontSize: 20,
                            marginBottom: 8,
                            alignSelf: 'stretch',
                            fontWeight: 'bold',
                            color: '#444444'
                        }}>设置</Text>
                    </View>
                </View>
                <View style={{flex: 9}}>

                </View>
            </View>
        )
    }
}

function select(store) {
    return {
        user: store.userStore.user,
    }
}

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        justifyContent: 'center',
    },
    image_2: {
        height: long,
        width: long,
        borderRadius: long_2,
        marginLeft: long_2,
        marginTop: 25
    }
});

export default connect(select)(Setting);