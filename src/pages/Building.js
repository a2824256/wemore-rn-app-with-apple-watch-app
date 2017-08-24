import React, {Component} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
export const buildpic = require('../components/img/building.png');

class Building extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { width, height } = Dimensions.get('window');
        return (
            <View style={{flex:1}}>
                <Image
                    // resizeMode={Image.resizeMode.contain}
                    source={buildpic}
                    style={{width:width,height:height}}
                    ></Image>
            </View>
        );
    }
}


function select(store) {
    return {
        page: store.mainStore.status,
    }
}


export default connect(select)(Building);
