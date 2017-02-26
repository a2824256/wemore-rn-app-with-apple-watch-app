import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

class Menu extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#009999',flex:1}}>
                <View style={{backgroundColor:'#fff',flex:2}}>
                    <View>
                    </View>
                </View>
                <View style={{backgroundColor:'#0fb4b0',flex:8}}></View>
            </View>
        )
    }
}

function select(store) {
    return {
        user: store.userStore.user,
    }
}

export default connect(select)(Menu);