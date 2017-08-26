import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Switch} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';

class SwitchButton extends Component {
    constructor(props) {
        super(props);
    }

    _press(o, type) {
        this.props.actions.changePage(o);
        this.props.callback(type)
    }

    render() {
        let name = this.props.name;
        let value = this.props.value;
        return (
            <View>
                <View style={styles.buttonBox}>
                    <View style={styles.box_2}/>
                    <View style={styles.center}>
                        <Text style={styles.text}>{name}</Text>
                    </View>
                    <View>
                        <Switch value={value} disabled={false} thumbTintColor='green'/>
                    </View>
                </View>
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

export default connect(select, mapDispatchToProps)(SwitchButton);