/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, WebView} from 'react-native';
import {connect} from 'react-redux';
var {width, height} = Dimensions.get('window');
var long = width / 2;
var long_2 = width / 4;

export const msg = require('../components/img/menuButton/message_black.png');

class MyMsg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var url = 'http://148.coolmoresever.com/index.php?m=Home&c=Index&a=mymsg&acc=' + this.props.user.acc;
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 2,marginLeft:15}}>
                        <Image source={msg}
                               style={styles.image}></Image>
                    </View>
                    <View style={{flex: 10, justifyContent: 'center'}}>
                        <Text style={{
                            fontSize: 20,
                            marginBottom: 8,
                            alignSelf: 'stretch',
                            fontWeight: 'bold',
                            color: '#444444'
                        }}>我的消息</Text>
                    </View>
                </View>
                <View style={{height: 0.5, backgroundColor: '#464646'}}/>
                <View style={{flex: 9}}>
                    <WebView style={styles.map} source={{uri:url,method:'GET'}} startInLoadingState={true} domStorageEnabled={true}
                             javaScriptEnabled={true}>
                    </WebView>
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

export default connect(select)(MyMsg);