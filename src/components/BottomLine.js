import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class BottomLine extends Component {


    render() {
        return (
            <View style={{justifyContent: 'center',alignItems: 'center',marginTop:100,marginBottom:20}}>
                <Text style={{color:'#818181'}}>-------------我也是有底线的-------------</Text>
            </View>
        )
    }
}

