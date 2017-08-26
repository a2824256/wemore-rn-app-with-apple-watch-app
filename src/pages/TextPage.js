/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, Image, Dimensions, Switch} from 'react-native';
import {connect} from 'react-redux';

class TextPage extends Component {
    constructor(props) {
        super(props);
    }

    //未完成品
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{fontSize: 20}}>视频已被管理员删除！</Text>
            </View>
        )
    }
}

function select(store) {
    return {
        user: store.userStore.user,
    }
}

export default connect(select)(TextPage);