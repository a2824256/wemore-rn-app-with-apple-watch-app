/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, WebView} from 'react-native';
import {connect} from 'react-redux';

class WorldGame extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var url = 'http://148.coolmoresever.com/index.php?m=Home&c=Index&a=wemap&type=1&acc=' + this.props.user.acc;
        return (
            <View style={{flex:1}}>
                <WebView style={styles.map} source={{uri:url,method:'GET'}} startInLoadingState={true} domStorageEnabled={true}
                         javaScriptEnabled={true}>
                </WebView>
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
    user_info:{
        height:40,
        width:80,
        marginTop:0,
        backgroundColor: '#9DD6EB',
    },
    map:{
        flex:1
    }
});

export default connect(select)(WorldGame);