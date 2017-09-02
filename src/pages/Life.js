'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, Dimensions, TouchableHighlight, ScrollView} from 'react-native';
import LifeSwiper from './LifeSwiper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';

var {width, height} = Dimensions.get('window');

class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'life'
        };
    }

    _press(o) {
        this.props.actions.changePage(o);
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#f4f4f4'}}>
                <LifeSwiper/>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableHighlight style={{marginTop: 20}} onPress={() => {
                        this._press('building')
                    }}>
                        <View style={{
                            backgroundColor: '#009999', height: 40, width: width / 4, alignItems: 'center',
                            justifyContent: 'center', borderRadius: width / 6
                        }}>
                            <Text style={{color: '#fff', zIndex: -1}}>
                                我的生活
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}


function select(store) {
    return {
        user: store.userStore.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(select, mapDispatchToProps)(Life);