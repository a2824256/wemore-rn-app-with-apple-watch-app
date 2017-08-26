/**
 * Created by PPPPP_leung on 2017/6/11.
 */
import React, {Component} from 'react';
import {View, Text, Dimensions, WebView} from 'react-native';
import {connect} from 'react-redux';
import SettingButton from '../components/SwitchButton';
var {width, height} = Dimensions.get('window');
var long = width / 9;
var webview_long = width - long

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var url = 'https://www.baidu.com/s?wd=' + this.props.content
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{
                    height: long,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#575757'
                }}>
                    <Text style={{
                        color:'#fff'
                    }}>
                        搜索结果
                    </Text>
                </View>
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


export default connect(select)(Search);