import React, {Component} from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';

class SwipePic extends Component {

    _press(o, url) {
        this.props.actions.changeBottom(o, url);
    }

    render() {
        var pic = this.props.pic;
        var height = this.props.height;
        var url = this.props.url;
        if (url == null) {
            return (
                <View>
                    <Image
                        resizeMode={Image.resizeMode.stretch}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: height,
                        }}
                        source={{uri: pic}}
                    />
                </View>
            )
        } else {
            return (
                <View>
                    <TouchableHighlight onPress={() => {
                        this._press('xxx', url)
                    }}>
                        <Image
                            resizeMode={Image.resizeMode.stretch}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: height,
                            }}
                            source={{uri: pic}}
                        />
                    </TouchableHighlight>
                </View>
            )
        }
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

export default connect(select, mapDispatchToProps)(SwipePic);