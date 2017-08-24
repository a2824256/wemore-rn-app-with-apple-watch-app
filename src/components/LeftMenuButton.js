import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';

class LeftMenuButton extends Component {
    constructor(props) {
        super(props);
    }

    _press(o, type) {
        this.props.actions.changePage(o);
        this.props.callback(type)
    }

    render() {
        let userPic = this.props.pic;
        let name = this.props.name
        let value = this.props.site
        return (
            <View>
                <TouchableHighlight onPress={() => {
                    this._press(value, 'left')
                }}>
                    <View style={styles.buttonBox}>
                        <View style={styles.box_2}/>
                        <Image source={userPic} style={styles.buttonImage}/>
                        <View style={styles.box_2}/>
                        <View style={styles.center}>
                            <Text style={styles.text}>{name}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    buttonBox: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 7
    },
    box_2: {
        width: 15,
    },
    buttonImage: {
        height: 40,
        width: 40
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    },
});

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

export default connect(select, mapDispatchToProps)(LeftMenuButton);