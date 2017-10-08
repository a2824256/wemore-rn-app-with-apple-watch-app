'use strict';

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    Alert,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';
import * as URL from '../configs/urlManage';


class FriendSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            // dataSource: new ListView.DataSource({
            //     rowHasChanged: (row1, row2) => row1 !== row2,
            // }),
            loaded: false,
        };
        // this._sendRequest = this._sendRequest.bind(this);
    }


    renderLoadingView() {
        return (
            <View style={styles.container}>
                <View style={{height: 100}}></View>
                <Text style={{color: '#4b4b4b'}}>
                    Loading...
                </Text>
            </View>
        );
    }

    fuc(uid, rid) {
        let url = URL.SEND_FRIEND_REQUEST;
        let formData = new FormData();
        if(uid == rid){
            Alert.alert("无法添加自己为好友!");
        }
        formData.append("uid", uid);
        formData.append("rid", rid);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.status) {
                    Alert.alert('提示', responseData.reason.toString());
                    return;
                } else {
                    Alert.alert('提示', responseData.reason.toString());
                    return;
                }
            }).catch((e) => {
            Alert.alert('错误提示', "发生错误", e.message);
        });
    }

    renderFriends(friends) {
        return (
            <View>
                <View style={styles.container}>
                    <Image
                        source={{uri: friends.touxiang_url}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <View style={{marginLeft: 30}}><Text style={styles.name}>{friends.name}</Text></View>
                    </View>
                    <TouchableHighlight onPress={() => {
                        this.fuc(this.props.user.id, friends.id)
                    }} underlayColor="#fff">
                        <View style={styles.add_friend_button}>
                            <Text style={{color: '#fff'}}>添加好友</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <View style={{height: 0.5, backgroundColor: '#959595'}}/>
                </View>
            </View>
        );
    }

    render() {
        if (this.props.type == 'loading') {
            return this.renderLoadingView();
        } else {
            try {
                if (this.props.content._cachedRowCount > 0) {
                    return (
                        <ListView
                            dataSource={this.props.content}
                            renderRow={this.renderFriends.bind(this)}
                            style={styles.listView}
                        />
                    );
                } else {
                    return (
                        <View style={{flex: 1}}>
                            <View style={{height: 100}}></View>
                            <View style={{justifyContent: 'center', alignItems: 'center',}}><Text>没有找到相关用户</Text></View>
                        </View>
                    )
                }
            } catch (e) {
                Alert.alert('error');
                return (
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text>{e.name}</Text>
                        <Text>{e.message}</Text>
                    </View>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
    },
    name: {
        fontSize: 15,
        marginBottom: 8,
        alignSelf: 'stretch',
        fontWeight: 'bold',
        color: '#444444'
    },
    info: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#00ab8f',
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10
    },
    listView: {
        // paddingTop: 20,
    },
    add_friend_button: {
        borderColor: '#00ab8f',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#00ab8f',
        height: 30,
        justifyContent: 'center',
        marginRight: 10
    }
});

function select(store) {
    return {
        page: store.mainStore.status,
        content: store.friendSearchStore.content,
        type: store.friendSearchStore.type,
        user: store.userStore.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

// <ListView
//    dataSource={this.state.dataSource}
//    renderRow={this.renderFriends}
//    style={styles.listView}
// />

export default connect(select, mapDispatchToProps)(FriendSearch);