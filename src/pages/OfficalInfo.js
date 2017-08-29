/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, Dimensions, WebView, Alert} from 'react-native';
import {connect} from 'react-redux';
import SettingButton from '../components/SwitchButton';

var {width, height} = Dimensions.get('window');
var long = width / 9;
var webview_long = width - long

class OfficalInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var url = this.props.content
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <WebView style={{height: webview_long}} source={{uri: url, method: 'GET'}} startInLoadingState={true}
                         domStorageEnabled={true}
                         javaScriptEnabled={true}/>
            </View>
        )
    }
}

function select(store) {
    return {
        content: store.mainStore.content,
    }
}


export default connect(select)(OfficalInfo);