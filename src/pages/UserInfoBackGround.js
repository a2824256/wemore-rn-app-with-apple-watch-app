import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';

export const info_bg = require('../components/img/infobg.jpg');

class UserInfoBackGround extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image source={info_bg} style={styles.backgroundImage}>
                <View>
                    <View style={{height:100}}/>
                    <View style={styles.box_1}>
                        <View style={{width:20}}/>
                        <Image source={{uri:this.props.user.touxiang_url}}
                               style={{height:70,width:70,borderRadius:35}}></Image>
                        <View style={styles.box_2}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.name}>{this.props.user.name}</Text>
                                <Image source={require('../components/img/male.png')}
                                       style={{height:15,width:15,marginLeft:7}}></Image>
                            </View>
                            <View style={{height:10}}/>
                            <Text style={styles.introduction}>{this.props.user.introduction}</Text>
                        </View>
                    </View>
                </View>
            </Image>
        )
    }
}


const styles = StyleSheet.create({
    backgroundImage: {
        height: 180,
        // flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    box_1: {
        flexDirection: 'row',
        // flex:1
    },
    box_2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginLeft:20
    },
    name: {
        color: '#fff',
        fontSize: 20,
        // fontWeight: 'bold',
    },
    introduction: {
        color: '#e2e2e2',
        fontSize: 15
    }
});


function select(store) {
    return {
        user: store.userStore.user,
    }
}

export default connect(select)(UserInfoBackGround);