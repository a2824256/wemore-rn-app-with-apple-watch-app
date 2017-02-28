import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null
        }
    }

    render() {
        return (
            <View style={{backgroundColor:'#009999',flex:1}}>
                <View style={{flex:2,backgroundColor:'#fff'}}>
                    <View style={{flex:2}}/>
                    <View style={{flex:2,backgroundColor:'#009999'}}>
                        <TextInput style={{height: 40,backgroundColor:'#25C884',borderWidth:1,borderColor:'#009991'}}
                                   placeholder="输入关键字搜索" underlineColorAndroid='transparent'
                                   onChangeText={(text) => this.setState({text})}></TextInput>
                    </View>
                    <View style={{height:0.5,backgroundColor:'#fdfdfd'}}/>
                </View>
                <View style={{flex:8}}>

                </View>
            </View>
        )
    }
}


module.exports = Menu;